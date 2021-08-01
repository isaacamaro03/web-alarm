const AlarmList = ({ alarms }) => {
  return alarms.map((alarm) => <div>{alarm.time}</div>);
};

export default AlarmList;
