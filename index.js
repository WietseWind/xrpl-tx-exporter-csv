const Client = require('rippled-ws-client')
const {parseBalanceChanges} = require('ripple-lib-transactionparser')

const account = process.argv.length > 2
  ? process.argv[2]
  : ''

if (!account.match(/^r[a-zA-Z0-9]{15,}/)) {
  console.log('Specify XRPL account (r...) as argument')
  process.exit(1)
}

const display = result => {
  if (result?.transactions) {
    result?.transactions.forEach(r => {
      const {tx, meta} = r
      let direction = 'other'
      if (tx?.Account === account) direction = 'sent'
      if (tx?.Destination === account) direction = 'received'
      const moment = (new Date((tx.date + 946684800) * 1000)).toISOString()
      const balanceChanges = parseBalanceChanges(meta)
      if (Object.keys(balanceChanges).indexOf(account) > -1) {
        const mutations = balanceChanges[account]
        mutations.forEach(mutation => {
          const currency = mutation.counterparty === ''
            ? 'XRP'
            : `${mutation.counterparty}.${mutation.currency}`
          const isFee = direction === 'sent' && Number(mutation.value) * -1 * 1000000 === Number(tx?.Fee)
            ? 1
            : 0
          const fee = direction === 'sent'
            ? Number(tx?.Fee) / 1000000 * -1
            : 0
          console.log(`${tx.ledger_index};${direction};${tx.TransactionType};${moment};${currency};${mutation.value};${isFee};${fee};${tx.hash}`)
        })
      }
    })
  }
}

const main = async () => {
  console.log('ledger;direction;txtype;date;currency;amount;is_fee;fee;hash')
  const client = await new Client('wss://xrplcluster.com')

  const getMore = async marker => {
    const result = await client.send({
      command: 'account_tx',
      account,
      limit: 10,
      marker
    })
  
    display(result)
    return result?.marker
  }

  let proceed = await getMore()

  while (proceed) {
    proceed = await getMore(proceed)
  }

  client.close()
}

main()
