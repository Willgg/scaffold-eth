const IPFS = require("ipfs-http-client");
const OrbitDB = require("orbit-db");

export async function testDB() {
  const ipfsOptions = {
    EXPERIMENTAL: {
      pubsub: true,
    },
    relay: {
      enabled: true,
      hop: {
        enabled: true,
        active: true,
      },
    },
    host: "127.0.0.1",
    port: "5001",
  };
  const ipfs = IPFS.create(ipfsOptions);
  console.log("-> IPFS node connected");
  const orbitdb = await OrbitDB.createInstance(ipfs);

  // This will create a new db
  let docstoreDb = await orbitdb.docs("orbit.user.emails");

  // This will load an existing DB
  //   const docstoreDb = await orbitdb.open("/orbitdb/zdpuAtWckifPAbod2pokSum4UDER3cNAZL9sHJwfZTGjstoNd/orbit.user.emails");
  //   await docstoreDb.load();

  await docstoreDb.put({ _id: "email-id", from: "random-addr-hash", body: "this is an email. Regards, HeySkylark" });
  console.log(docstoreDb.address.toString());
  console.log(docstoreDb.get("email-id"));
  await docstoreDb.close();
}
