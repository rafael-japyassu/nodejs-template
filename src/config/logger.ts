import pinoPretty from 'pino-pretty';
import pino from 'pino';

const stream = pinoPretty({
  colorize: true,
  singleLine: true,
});

export const logger = {
  info: (arg: unknown, context?: Function) => {
    if (context) {
      pino({ level: 'info' }, stream).info(
        `[${context.name}] - ${typeof arg === 'object' ? JSON.stringify(arg) : arg}`,
      );
      return;
    }
    pino({ level: 'info' }, stream).info(arg);
  },
  debug: (arg: unknown, context?: Function) => {
    if (context) {
      pino({ level: 'debug' }, stream).debug(
        `[${context.name}] - ${typeof arg === 'object' ? JSON.stringify(arg) : arg}`,
      );
      return;
    }
    pino({ level: 'debug' }, stream).debug(arg);
  },
  error: (arg: unknown, context?: Function) => {
    if (context) {
      pino({ level: 'error' }, stream).error(
        `[${context.name}] - ${typeof arg === 'object' ? JSON.stringify(arg) : arg}`,
      );
      return;
    }
    pino({ level: 'error' }, stream).error(arg);
  },
  warn: (arg: unknown, context?: Function) => {
    if (context) {
      pino({ level: 'warn' }, stream).warn(
        `[${context.name}] - ${typeof arg === 'object' ? JSON.stringify(arg) : arg}`,
      );
      return;
    }
    pino({ level: 'warn' }, stream).warn(arg);
  },
};
