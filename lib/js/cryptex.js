// Generated by CoffeeScript 1.9.2
(function() {
  var crypto;

  crypto = require('crypto');

  exports.encrypt = function(text, key, iv, algorithm, input_encoding, output_encoding) {
    var cipher, crypted;
    if (algorithm == null) {
      algorithm = 'aes-256-cbc';
    }
    if (input_encoding == null) {
      input_encoding = 'utf-8';
    }
    if (output_encoding == null) {
      output_encoding = 'hex';
    }
    cipher = crypto.createCipheriv(algorithm, key, iv);
    crypted = cipher.update(text, input_encoding, output_encoding);
    crypted += cipher.final(output_encoding);
    return crypted;
  };

  exports.decrypt = function(crypted, key, iv, algorithm, input_encoding, output_encoding) {
    var decipher, decrypted;
    if (algorithm == null) {
      algorithm = 'aes-256-cbc';
    }
    if (input_encoding == null) {
      input_encoding = 'hex';
    }
    if (output_encoding == null) {
      output_encoding = 'utf-8';
    }
    decipher = crypto.createDecipheriv(algorithm, key, iv);
    decrypted = decipher.update(crypted, input_encoding, output_encoding);
    decrypted += decipher.final(output_encoding);
    return decrypted;
  };

}).call(this);
