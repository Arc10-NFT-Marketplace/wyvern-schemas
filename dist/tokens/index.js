"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_1 = require("./custom");
const index_1 = require("./main/index");
const index_2 = require("./rinkeby/index");
exports.tokens = {
    rinkeby: index_2.rinkebyTokens,
    main: index_1.mainTokens,
    custom: custom_1.customTokens
};
//# sourceMappingURL=index.js.map