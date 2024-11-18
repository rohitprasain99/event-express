async function getEvents(req, res, next) {
  try {
    const data = [{ id: 1, name: "first event" }];
    await res.status(200).json(data, "Event fetched successfully");
  } catch (error) {
    console.error("Err", error.message);
    res.status(500).json({ devMessage: error.message }, "Could not get events");
  } finally {
    next();
  }
}

async function postEvent(req, res, next) {
  try {
    const data = req.body;
    //post event
    await res.status(200).json(data, "Event posted successfully");
  } catch (error) {
    console.error("Err", error.message);
    res
      .status(500)
      .json({ devMessage: error.message }, "Could not post events");
  } finally {
    next();
  }
}

async function putEvent(req, res, next) {
  try {
    const eventId = req.params.id;
    const data = req.body;
    //update event
    await res.status(200).json(data, "Event updated successfully");
  } catch (error) {
    console.error("Err", error.message);
    res
      .status(500)
      .json({ devMessage: error.message }, "Could not update event");
  } finally {
    next();
  }
}

async function deleteEvent(req, res, next) {
  try {
    const eventId = req.params.id;
    //delete event
    // throw new Error("failed");
    await res.status(200).json(data, "Event deleted successfully");
  } catch (error) {
    console.error("Err", error.message);
    res
      .status(500)
      .json({ devMessage: error.message }, "Could not delete event");
  } finally {
    next();
  }
}

module.exports = {
  getEvents,
  postEvent,
  putEvent,
  deleteEvent,
};
