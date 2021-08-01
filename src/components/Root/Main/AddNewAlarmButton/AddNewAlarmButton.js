import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const AddNewAlarmButton = ({ onClick }) => {
  return (
    <Fab color="secondary" onClick={onClick}>
      <Add />
    </Fab>
  );
};

export default AddNewAlarmButton;
