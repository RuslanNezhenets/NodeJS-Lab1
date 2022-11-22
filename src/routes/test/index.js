function GET(req, res) {
  res.json({ text: 'test get' })
}

function POST(req, res, url, payload) {
  res.json({
    text: 'test post',
    contentType: req.headers['content-type'],
    payload,
  })
}

function PUT(req, res, url, payload) {
  res.json({
    text: 'test put',
    contentType: req.headers['content-type'],
    payload,
  })
}

function DELETE(req, res) {
  res.json({ text: 'test delete' })
}

function OPTIONS(req, res) {
  res.json({ text: 'test options' })
}

export { GET, POST, PUT, DELETE, OPTIONS }
