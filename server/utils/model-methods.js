module.exports = ({
  knex = {},
  name = "name",
  tableName = "tablename",
  selectableProps = [],
  timeout = 1000
}) => {
  const findAll = () =>
    knex
      .select(selectableProps)
      .from(tableName)
      .timeout(timeout);

  return {
    name,
    tableName,
    selectableProps,
    timeout,
    findAll
  };
};
