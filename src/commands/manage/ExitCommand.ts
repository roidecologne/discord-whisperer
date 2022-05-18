import { Message } from 'discord.js';

import * as exits from '~/util/db/Exits';
import { getSounds } from '~/util/SoundUtil';

import Command from '../base/Command';

export class ExitCommand extends Command {
  public readonly triggers = ['exit'];

  public run(message: Message, params: string[]) {
    const [exitSound] = params;
    if (!exitSound) {
      exits.remove(message.author.id);
      return;
    }

    const sounds = getSounds();
    if (!sounds.includes(exitSound)) return;

    exits.add(message.author.id, exitSound);
  }
}
