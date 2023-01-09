function parseJSON(data, fallback) {
  try {
    return JSON.parse(data)
  } catch {
    return fallback
  }
}

export { parseJSON }
