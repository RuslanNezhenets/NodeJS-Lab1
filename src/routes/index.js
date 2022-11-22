function GET(req, res) {
  res.json({ text: 'root get' })
}

function POST(req, res, url, payload) {
  res.json({
    text: 'root post',
    contentType: req.headers['content-type'],
    payload,
  })
}

function PUT(req, res, url, payload) {
  res.json({
    text: 'root put',
    contentType: req.headers['content-type'],
    payload,
  })
}

function DELETE(req, res) {
  res.json({ text: 'root delete' })
}

function OPTIONS(req, res) {
  res.json({ text: 'root options' })
}

export { GET, POST, PUT, DELETE, OPTIONS }
