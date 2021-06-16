"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./main/index");
const index_2 = require("./rinkeby/index");
const index_3 = require("./custom/index");
exports.schemas = {
    rinkeby: index_2.rinkebySchemas,
    main: index_1.mainSchemas,
    custom: index_3.customSchemas,
};
//# sourceMappingURL=index.js.map