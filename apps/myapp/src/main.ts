import type { ReactNode } from 'react';
import { truncate } from 'lodash';

let msg: ReactNode = 'Hello1';
console.log(truncate(msg as string));
