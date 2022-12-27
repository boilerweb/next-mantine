import {Box, Button, createStyles, Title} from '@mantine/core';
import {NextPage} from 'next';

const useStyle = createStyles(theme => ({
  title: {
    color: 'red',

    [theme.fn.largerThan('xl')]: {
      color: 'blue',
    },
  },
  button: {
    marginTop: 16,

    [theme.fn.largerThan('xl')]: {
      marginTop: 32,
    },
  },
}));

const Top: NextPage = () => {
  const {classes} = useStyle();

  return (
    <Box>
      <Title className={classes.title}>hello</Title>

      <Button color="blue" variant="light" className={classes.button}>
        click button
      </Button>
    </Box>
  );
};

export default Top;
