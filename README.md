# XRPL transaction exporter (to CSV)

This small node app fetches all transactions for an account and returns the results in CSV.

Uses [xrplcluster.com](https://xrplcluster.com) full history nodes.

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

If you are new to anything code / nodejs related:

1. Install nodejs, `2:30` @ https://www.youtube.com/watch?v=9gVK6fp3UOo
2. Download this source: https://github.com/WietseWind/xrpl-tx-exporter-csv/archive/refs/heads/main.zip
3. Extract the ZIP and open your commandline, navigate to the folder where you extracted the ZIP
4. Type: `npm install`
5. Run (see below)

## Run

`node index.js {account}`
eg.
`node index.js rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY`

## Store output as CSV

`node index.js {account} > {somefile}`
eg.
`node index.js rPEPPER7kfTD9w2To4CQk6UCfuHM9c6GDY > export.csv`
