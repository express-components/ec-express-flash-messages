module.exports = function (req, res, next) {
  res.locals.flashMessages = (req.cookies.flash || []).map(msg => Object.assign(msg, {show: true})) || []
  res.cookie('flash', res.locals.flashMessages.filter(msg => !msg.show))
  res.flash = function (type, content) {
    res.locals.flashMessages.push({type, content})
    res.cookie('flash', res.locals.flashMessages.filter(msg => !msg.show))
  }
  next()
}
