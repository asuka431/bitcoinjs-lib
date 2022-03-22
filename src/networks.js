'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.testnet = exports.regtest = exports.bitcoin = void 0;
exports.bitcoin = {
  messagePrefix: '\xBaricoin Signed Message:\n',
  bech32: 'bari',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x1a,
  scriptHash: 0x15,
  wif: 0x9a,
};
exports.regtest = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
