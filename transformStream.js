var Transform = require('stream').Transform,
util = require('util');

var TransformStream = function() {
  /* For input1.json file */
  //Transform.call(this, {objectMode: true});

  /* For input1.txt file */
  Transform.call(this);
};
util.inherits(TransformStream, Transform);

TransformStream.prototype._transform = function(chunk, encoding, callback) {

  /* For input1.json file*/
  // console.log("pre-trim: ", chunk.value);
  // chunk.value = chunk.value.replace(/ /g, '');
  // console.log("post-trim: ", chunk.value);

  /* For input1.txt file */
  console.log("pre-trim: ", chunk.toString());
  chunk = chunk.toString().replace(/\s/g, "");
  console.log("post-trim: ", chunk);

  this.push(chunk);
  callback();
};

module.exports = TransformStream;