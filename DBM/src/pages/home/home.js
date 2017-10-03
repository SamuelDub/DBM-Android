module.exports = {
    Message: function(message, bot) {


        let wm = message.content.toUpperCase();

        let command = wm.split(" ")[0];

        if(command != "!HELP") {
            return;
        }

        var creatorRole = message.guild.roles.find("name", "Creator");
        var adminRole = message.guild.roles.find("name", "Admin");

        message.author.sendMessage("```Markdown\n#Basic Commands\n !help: shows all commands\n !ping: pong\n !request [words]: request a command to be implemented in the bot\n !serverinfo: gives you basic information about the server\n !userinfo [@user]: gives you basic information about the user mentioned\n !pfp [@person]: gives you the profile picture of the mentioned person```");
        message.author.sendMessage("```Markdown\n#Fun Commands\n !quote: will give you a quote of the previous message\n !say [words]: Bot will repeat what you said\n !roll: rolls a 6-sided die\n !8ball: gives you the answer you didn't want\n !simulation: just like in the simulation\n !topkek [number]: This one is the top\n !advice: give you random helpful advice!\n !poll: start & vote in them\n !temp [minutes] [channel name]: creates a voice channel for a temporary amount of time```");
        message.author.sendMessage("```Markdown\n#Internet Commands\n !talk [words]: I respond to you!\n !reddit [subreddit]: I will give you the link to that subreddit\n !channel [@person]: I will give you their youtube channel\n !music: plays the audio from any youtube video\n !lmgtfy: I can google anything```");
        if (message.member.roles.has(creatorRole.id) || message.member.roles.has(adminRole.id)) {
            message.author.sendMessage("```Markdown\n#Mod Commands\n !ban [@person] [reason]: bans the person mentioned\n !kick [@person]: kicks the person mentioned\n !stop: only admins can chat when toggled on\n !log: logs the previos message\n !everyone: toggles the ability for people to mention @everyone and @here```")
        }
        message.reply("You have been sent my commands in your dms");
        return;

    }

};