# U9 Proxy for Minecraft Servers

**Note: This repository is an incomplete script intended for users who want to set up their own Minecraft proxy servers. If you are interested in the complete U9 Proxy script, it is available for purchase at a price of $40 in BTC/ETH. For inquiries, please contact me via Telegram or Discord.**

**Telegram**: [@otterudyat](https://t.me/otterudyat)  
**Discord**: Skrrr#7598

U9 Proxy is a proxy server designed to hide the IP address of Minecraft servers, allowing users to access the servers while protecting them from DDoS attacks. This repository provides a basic implementation of a proxy server in JavaScript using the `http-proxy` library, along with a Discord bot to log and track attacks on the servers.

## Installation

1. Clone this repository to your local machine.
2. Install Node.js if you haven't already (https://nodejs.org/).
3. In the root directory of the project, run the following command to install the dependencies:
```
npm install
```


## Usage

### Starting the Proxy Server

To start the proxy server, run the following command in the root directory of the project:
```
npm start
```

By default, the proxy server will listen on port 8080. You can adjust the port number in the `proxy.js` file if needed.

### Setting up the Discord Bot

To set up the Discord bot, you need to create a Discord bot and obtain its token. Replace the placeholder `'TOKEN_DEL_BOT'` in `discordBot.js` with your bot's token. Additionally, replace `'ID_DEL_CANAL'` with the ID of the channel where you want to log the attacks.

```javascript
const botToken = 'BOT_TOKEN';
const channelId = 'CHANNEL_LOGS_ID';
```
Once you have replaced the placeholders, you can start the Discord bot along with the proxy server by running npm start.

## Contributing
Contributions to this repository are currently not accepted.

## License
This project is licensed under the MIT License.

## Disclaimer
The incomplete script provided in this repository is intended for educational purposes only. Use at your own risk. The author assumes no responsibility for any misuse or damages caused by the use of this script.

## Copyright
If you choose to use the U9 Proxy script, you are required to give credit to ottersec (github.com/ottersec) and include the name "U9 Proxy" in your implementation.
