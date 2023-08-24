function stringLength(string){

  const length = string.length;
  if (length < 1 ){
     throw new Error( "String must be at least 1 character long" ) ;
}
  if (length > 10 ){
    throw new Error( "String must be less than 10 character" ) ;
  }

  return length;

}

module.exports = stringLength;