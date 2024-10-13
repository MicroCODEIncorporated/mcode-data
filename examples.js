// MicroCODE: define this module's name for  our 'list-log' package
const MODULE_NAME = 'examples.js';
const data = require('./index.js');

let uuid;

{
    // debug: NIL Value
    uuid = "00000000-0000-0000-0000-000000000000";
    uuidJson = data.uuidDecode(uuid);
    console.log({"Version": "NIL"}, uuidJson);

    // debug: Variant 2 (RFC 4122/9562) UUIDv1 - Unicast
    uuid = "C232AB00-9414-11EC-B3C8-6F6BDECED846";
    uuidJson = data.uuidDecode(uuid);
    console.log({"Version": "UUIDv1"}, uuidJson);

    // debug: Variant 2 (RFC 4122/9562) UUIDv1 - Multicast
    uuid = "C232AB00-9414-11EC-A3C8-AF6BDECED846";
    uuidJson = data.uuidDecode(uuid);
    console.log({"Version": "UUIDv1"}, uuidJson);

    // debug: Variant 2 (RFC 4122/9562) UUIDv2
    uuid = "f47ac10b-58cc-21cf-a2d0-00a0c91e6bf6";
    uuidJson = data.uuidDecode(uuid);
    console.log({"Version": "UUIDv2"}, uuidJson);

    // debug: Variant 2 (RFC 4122/9562) UUIDv3
    uuid = "5df41881-3aed-3515-88a7-2f4a814cf09e";
    uuidJson = data.uuidDecode(uuid);
    console.log({"Version": "UUIDv3"}, uuidJson);

    // debug: Variant 2 (RFC 4122/9562) UUIDv4
    uuid = "919108f7-52d1-4320-9bac-f847db4148a8";
    uuidJson = data.uuidDecode(uuid);
    console.log({"Version": "UUIDv4"}, uuidJson);

    // debug: Variant 2 (RFC 4122/9562) UUIDv5
    uuid = "2ed6657d-e927-568b-95e1-2665a8aea6a2";
    uuidJson = data.uuidDecode(uuid);
    console.log({"Version": "UUIDv5"}, uuidJson);

    // debug: Variant 2 (RFC 4122/9562) UUIDv6
    uuid = "1EC9414C-232A-6B00-B3C8-9F6BDECED846";
    uuidJson = data.uuidDecode(uuid);
    console.log({"Version": "UUIDv6"}, uuidJson);

    // debug: Variant 2 (RFC 4122/9562) UUIDv7
    uuid = "017F22E2-79B0-7CC3-98C4-DC0C0C07398F";
    uuidJson = data.uuidDecode(uuid);
    console.log({"Version": "UUIDv7"}, uuidJson);

    // debug: Variant 2 (RFC 4122/9562) UUIDv8
    uuid = "ffffffff-ffff-8fff-9fff-ffffffffffff";
    uuidJson = data.uuidDecode(uuid);
    console.log({"Version": "UUIDv8"}, uuidJson);

    // debug: MAX Value
    uuid = "ffffffff-ffff-ffff-ffff-ffffffffffff";
    uuidJson = data.uuidDecode(uuid);
    console.log({"Version": "MAX"}, uuidJson);
}
