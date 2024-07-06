// utils/logger.ts
import { createLogger, format, level, transports } from "winston";
const { combine, timestamp, printf, colorize, errors, json } = format;

// Define your custom format
// const CustomFormat = printf(
//   ({ level, message, timestamp, stack, ...metadata }) => {
//     // // Include error stack if present
//     // const errorDetails = stack ? { error: { message, stack } } : null;
//     // return JSON.stringify({
//     //   timestamp,
//     //   level : level.toUpperCase().
//     //   message,
//     //   ...(errorDetails ? errorDetails : {}),
//     //   ...metadata,
//     // });
//   }
// );

const CustomFormat = printf(({ level, message, timestamp }) => {
  const upperLevel = level.replace(/\u001b\[\d+m/g, '').toUpperCase(); 
  return JSON.stringify({
    timestamp,
    level: upperLevel,
    message,
    errors: message instanceof Error ? message.stack : null,
  });
});

console.log(process.env.NODE_ENV);

// Setup logger
const logger = createLogger({
  format: combine(
    timestamp({ format: "YYYY-MM-DDTHH:mm:ss.SSSZ" }),
    errors({ stack: true }),
    CustomFormat,
    json()
  ),
  transports: [
    // Determine the transport based on the environment
    ...(process.env.NODE_ENV === "production"
      ? [
          new transports.File({
            filename: "combined.log",
            format: combine(colorize(), CustomFormat), // File logging in JSON format
          }),
        ]
      : [
          new transports.Console({
            format: combine(colorize(), CustomFormat), // Console logging with colorization
          }),
        ]),
  ],
});

export default logger;
