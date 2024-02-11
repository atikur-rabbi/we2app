// Short way
export default (req, res) => {
    res.status(200).json({
        message: 'Api is working !!'
    });
  };
  
  // Long Way
  // export default (req, res) => {
  //   res.setHeader('Content-Type', 'application/json')
  //   res.statusCode = 200
  //   res.end(JSON.stringify({
  //     message: 'Api is working !!'
  //   }))
  // }