function GET(req, res) {
  res.json({ text: 'test2 get' })
}

function POST(req, res, url, payload) {
  res.json({
    text: 'test2 post',
    contentType: req.headers['content-type'],
    payload,
  })
}

function PUT(req, res, url, payload) {
  res.json({
    text: 'test2 put',
    contentType: req.headers['content-type'],
    payload,
  })
}

function DELETE(req, res) {
  res.json({ text: 'test2 delete' })
}

function OPTIONS(req, res) {
  res.json({ text: 'test2 options' })
}

export { GET, POST, PUT, DELETE, OPTIONS }
