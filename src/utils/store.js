function getAlarmsFromStore() {
  const storeAlarms = localStorage.getItem("@alarms-app/alarms");

  if (storeAlarms) {
    return JSON.parse(storeAlarms);
  }
}

function addAlarmsToStore(alarms) {
  localStorage.setItem("@alarms-app/alarms", JSON.stringify(alarms || []));
}

export { getAlarmsFromStore, addAlarmsToStore };
