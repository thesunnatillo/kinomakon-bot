const users = require("./users")
const movies = require("./movies")
const channels = require("./channels")

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const run = async () => {
    await users()
    await sleep(3000);
    await movies()
    await sleep(3000);
    await channels()
    console.log('✅Done!')
};

run();
