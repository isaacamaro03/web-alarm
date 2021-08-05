import { Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const customChipClasses = {
  selected: "CustomChip-selected",
};

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "16px",
    backgroundColor: "hsl(354 0% 55% / .5)",

    [`&:hover:not(.${customChipClasses.selected})`]: {
      backgroundColor: "hsl(354 0% 55% / .5)",
    },
    [`&.${customChipClasses.selected}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const CustomChip = ({ children, selected, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      disableElevation
      color="primary"
      className={clsx(
        classes.root,
        selected ? customChipClasses.selected : null,
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomChip;
export { customChipClasses as classes };
