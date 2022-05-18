import { Message } from 'discord.js';

import localize from '~/util/i18n/localize';

import ConfigCommand from '../base/ConfigCommand';
import chunkedMessages from '../util/chunkedMessages';

export class HelpCommand extends ConfigCommand {
  public readonly triggers = ['commands', 'help'];

  public run(message: Message) {
    const helpMessage = this.getFormattedListOfCommands();
    const chunkedHelpMessage = chunkedMessages(helpMessage);

    chunkedHelpMessage.forEach(chunk => message.author.send(chunk));
  }

  private getFormattedListOfCommands() {
    return [
      localize.t('help.headline', { prefix: this.config.prefix }),
      '',
      `welcome                                ${localize.t('help.welcome')}`,
      `commands                               ${localize.t('help.commands')}`,
      `help                                   ${localize.t('help.commands')}`,

      `sounds                                 ${localize.t('help.sounds.all')}`,
      `add                                    ${localize.t('help.sounds.add')}`,
      `add <name> <link>                      ${localize.t('help.sounds.add')}`,
      `add <name> <link> <start>              ${localize.t('help.sounds.add')}`,
      `add <name> <link> <start> <end?>       ${localize.t('help.sounds.add')}`,
      `<sound>                                ${localize.t('help.sounds.play')}`,
      `combo <sound> <sound> ...              ${localize.t('help.sounds.combo')}`,
      `random                                 ${localize.t('help.sounds.random')}`,
      `random <tag>                           ${localize.t('help.sounds.random')}`,
      `loop <sound> <count?>                  ${localize.t('help.sounds.loop')}`,
      `repeat <sound> <count?>                ${localize.t('help.sounds.loop')}`,
      `skip                                   ${localize.t('help.sounds.skip')}`,
      `next <sound>                           ${localize.t('help.sounds.next')}`,
      `rename <old> <new>                     ${localize.t('help.sounds.rename')}`,
      `remove <sound>                         ${localize.t('help.sounds.remove')}`,
      `download <sound>                       ${localize.t('help.sounds.download')}`,
      `stop                                   ${localize.t('help.sounds.stop')}`,
      `leave                                  ${localize.t('help.sounds.stop')}`,

      `modify <sound> volume <value>`,
      `modify <sound> clip <start> <end?>`,

      `entrance <sound>                       ${localize.t('help.entrance.set')}`,
      `entrance                               ${localize.t('help.entrance.remove')}`,
      `exit <sound>                           ${localize.t('help.exit.set')}`,
      `exit                                   ${localize.t('help.exit.remove')}`,

      `tag <sound> <tag>                      ${localize.t('help.tags.add')}`,
      `tag <sound>                            ${localize.t('help.tags.list')}`,
      `tag <sound> clear                      ${localize.t('help.tags.clear')}`,
      `tags                                   ${localize.t('help.tags.all')}`,
      `search <tag>                           ${localize.t('help.tags.search')}`,

      `mostplayed                             ${localize.t('help.mostplayed')}`,
      `lastadded                              ${localize.t('help.lastadded')}`,

      `ignore <user>                          ${localize.t('help.ignore')}`,
      `unignore <user>                        ${localize.t('help.unignore')}`,
      `avatar                                 ${localize.t('help.avatar')}`,
      `avatar remove                          ${localize.t('help.avatar')}`,
      `config <option> <value>                ${localize.t('help.config')}`,
      `set <option> <value>                   ${localize.t('help.config')}`
    ];
  }
}
