const getNextMatchController = async (req, res, next) => {
  try {
    const sarasa = await (1 + 1);
    res.send('This is the next match ' + sarasa);
  } catch (error) {
    console.log('Error', error);
    throw error;
  }
};

module.exports = {
  getNextMatchController,
};
