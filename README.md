# XRPL transaction exporter (to CSV)

This small node app fetches all transactions for an account and returns the results in CSV.

### Exported columns:

- ledger (XRPL Ledger Index)
- direction (sent, received, other (eg. async DEX trading result))
- txtype (XRPL Transaction Type)
- date
- currency (XRP or ISSUER.CURRENCY)
- amount (amount in XRP (not drops) or IOU)
- is_fee
- fee (fee in XRP, chraged to own account)
- hash

## Install

`npm install`

## Run

`node index.js {account}`
eg.
`node index.js rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY`

## Store output as CSV

`node index.js {account} > {somefile}`
eg.
`node index.js rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY > export.csv`
