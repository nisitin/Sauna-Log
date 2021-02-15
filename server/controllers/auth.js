export const showMessage = (req, res) => {
    res.status(200).send(`Here is you message ${req.res.message}`)
}