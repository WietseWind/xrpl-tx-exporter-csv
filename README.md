# XRPL transaction exporter [![npm version](https://badge.fury.io/js/xrpl-tx-export.svg)](https://badge.fury.io/js/xrpl-tx-export) [![](https://data.jsdelivr.com/v1/package/npm/xrpl-tx-export/badge)](https://cdn.jsdelivr.net/npm/xrpl-tx-export/dist/xrpl-tx-export.js)

This small node app fetches all transactions for an account and returns the results in CSV (when called from the command line) or as a parsed object (when used as a node module).

Uses [xrplcluster.com](https://xrplcluster.com) full history nodes.

![](https://s3.gifyu.com/images/giff47d82669761cede.gif)

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

# Run: commandline (to CSV)

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

# Run: as a module

Import `app` and call as function.

Call: `app(account, callback)`. See example use in [index.js](https://github.com/WietseWind/xrpl-tx-exporter-csv/blob/main/index.js)

# Run: browser

Ready to use: **[dist/index.html](https://raw.githack.com/WietseWind/xrpl-tx-exporter-csv/main/dist/index.html)**

Get the browserified version from the `dist` folder, and see `run as module`.
Ready to use: https://cdn.jsdelivr.net/npm/xrpl-tx-export/dist/xrpl-tx-export.js

Sample:
https://jsfiddle.net/WietseWind/vtL3msaw

Build for the browser using `npm run build` if working from source.
