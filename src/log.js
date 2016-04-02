import winston from "winston";
winston.remove(winston.transports.Console)
winston.add(winston.transports.Console, {
  prettyPrint: true,
  colorize: true
});
export default winston;
