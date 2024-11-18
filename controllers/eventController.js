async function getEvents(req, res, next) {
  try {
    const data = [{ id: 1, name: "first event" }];
    // throw new Error("failed");
    await res.status(200).json(data, "Event fetched successfully");
  } catch (error) {
    console.error("Error while fetching events", error.message);
    res.status(500).json({ devMessage: error.message }, "Could not get events");
    next();
  }
}

async function postEvent(req, res, next) {
  try {
    await res.json([
      {
        id: 2,
        name: "second event posted",
      },
    ]);
  } catch (error) {
    console.error("Errror while fetching events", error.message);
    next();
  }
}

async function putEvent(req, res, next) {
  try {
    await res.json({
      status: 200,
      data: "list of events",
    });
  } catch (error) {
    console.error("Errror while fetching events", error.message);
    next();
  }
}

async function deleteEvent(req, res, next) {
  const eventId = req.params.id;
  console.log("here", req.params);
  try {
    res.json("event deleted successfully" + eventId);
  } catch (error) {
    console.error("Errror while fetching events", error.message);
    next();
  }
}

module.exports = {
  getEvents,
  postEvent,
  putEvent,
  deleteEvent,
};
