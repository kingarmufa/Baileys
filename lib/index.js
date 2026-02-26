"use strict";

const chalk = require("chalk");

console.clear();

console.log(chalk.white(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`));

// DARKRELAY - New Update Banner
console.log(
  chalk.hex('#6a00ff').bold('╔════════════════════════════════════╗\n') +
  chalk.hex('#8b5cf6').bold('║          D A R K R E L A Y          ║\n') +
  chalk.hex('#a78bfa').bold('║           N E W   U P D A T E       ║\n') +
  chalk.hex('#6a00ff').bold('╚════════════════════════════════════╝\n\n') +

  chalk.hex('#38bdf8').italic('        last updated • 26 Febuari 2026\n') +
  chalk.hex('#c084fc').italic('        Modification by @armufastore1\n') +
  chalk.hex('#a78bfa').italic('        telegram: @armufastore1\n\n') +

  chalk.hex('#6a00ff').bold('             ⚡ SYSTEM ENHANCED ⚡\n')
);

console.log(chalk.white(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`));

console.log(chalk.hex("#6f00f")("DARKRELAY HERE\n"));
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
