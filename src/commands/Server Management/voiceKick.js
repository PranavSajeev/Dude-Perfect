// Copyright 2019 Arindam Hazra aka Xynox <https://arindamz.github.io/>
// 
// Licensed under the Apache License, Version 2.0(the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
// http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const { Command } = require('discord-akairo');

class VoiceKick extends Command {
    constructor() {
        super('voiceKick', {
            aliases: ['voicekick', 'vkick', 'vdc'],
            channel: 'guild',
            category: 'Guild Management',
            description: {
                content: 'Disconnects the user provided by the executor from the voice channel.',
                usage: '<user>',
                examples: ['Xynox#0117']
            },
            args: [
                {
                    id: 'member',
                    type: 'member',
                    prompt: {
                        start: "<a:RedTick:760514410115498025> **You need to mention user!**"
                    },
                    default: message => message.member
                }
            ],
            typing: true
        });
    }

    async exec(message, { member } ) {

        if (!message.member.hasPermission("MOVE_MEMBERS")) return message.reply("<a:RedTick:760514410115498025> **You need `MOVE_MEMBERS` permission to use this command!**");
        
        try {
        await member.voice.kick(member);
        return message.channel.send(`<:check:753484699237613630> **${member.user.tag}** has successfully disconnected by **${message.author.tag}**.`);

        } catch (err) 
            { 
                message.channel.send(`<a:RedTick:760514410115498025> **${err}**`);
            }

    }
}

module.exports = VoiceKick;