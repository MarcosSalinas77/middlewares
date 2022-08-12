const home = (req, res) => {
  res.render('home')
}

const hello = (req, res) => {

  const { name } = req

  res.render('hello', { name: name !== undefined ? name : null })
}

const private = (req, res) => {
  res.render('private')
}

module.exports = { 
  home,
  hello,
  private
}