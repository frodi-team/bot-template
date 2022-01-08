import Container from 'typedi';
import { Core } from './bot/core';

const core = Container.get(Core);

core.start();
