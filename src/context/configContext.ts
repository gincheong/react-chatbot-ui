import React from 'react';
import { Config } from 'shared/models';

export const configContext = React.createContext<Config | null>(null);
