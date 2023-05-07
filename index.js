const { SlashCommandBuilder } = require("@discordjs/builders");
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  Discord,
} = require("discord.js");
const { PermissionFlagsBits } = require("discord-api-types/v10");
const config = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});
const guildId = config.guildId;
const discordToken = config.discordToken;

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const commandManager = client.application.commands;

  await commandManager.create(
    new SlashCommandBuilder()
      .setName("run")
      .setDescription("Place status embed")
      .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    guildId
  );

  await commandManager.create(
    new SlashCommandBuilder()
      .setName("ping")
      .setDescription(
        "Get the current latency of the bot's connection to the Discord server."
      ),
    guildId
  );

  await commandManager.create(
    new SlashCommandBuilder()
      .setName("uptime")
      .setDescription("Get the bot's uptime."),
    guildId
  );

  await commandManager.create(
    new SlashCommandBuilder()
      .setName("update")
      .setDescription("Update a field value")
      .addStringOption((option) =>
        option
          .setName("messageid")
          .setDescription("The ID of the message to update")
          .setRequired(true)
      )
      .addStringOption((option) =>
        option
          .setName("field")
          .setDescription("The name of the field to update")
          .setRequired(true)
          .setChoices(
            { name: "Chegg", value: "chegg" },
            { name: "CourseHero", value: "coursehero" },
            { name: "Bartleby", value: "bartleby" },
            { name: "SlideShare", value: "slideshare" },
            { name: "Scribd", value: "scribd" },
            { name: "GauthMath", value: "gauthmath" },
            { name: "Academia", value: "academia" },
            { name: "Brainly", value: "brainly" },
            { name: "Numerade", value: "numerade" },
            { name: "Studocu", value: "studocu" },
            { name: "ChatGPT", value: "chatgpt" },
            { name: "DocGen", value: "docgen" }
          )
      )
      .addStringOption((option) =>
        option
          .setName("status")
          .setDescription("The status to set for the field")
          .setRequired(true)
          .setChoices(
            { name: "Online", value: "online" },
            { name: "Moderate", value: "moderate" },
            { name: "Offline", value: "offline" }
          )
      )
      .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
    guildId
  );
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "update") {
    const field = interaction.options.getString("field");
    const status = interaction.options.getString("status");
    const messageId = interaction.options.getString("messageid");

    const targetMessage = await interaction.channel.messages
      .fetch(messageId)
      .catch(() => null);

    if (!targetMessage) {
      await interaction.reply({
        content: `Could not find message with ID ${messageId}.`,
        ephemeral: true,
      });
      return;
    }

    if (!targetMessage.embeds || !targetMessage.embeds.length) {
      await interaction.reply({
        content: `Message with ID ${messageId} does not have any embeds.`,
        ephemeral: true,
      });
      return;
    }

    switch (field) {
      case "chegg":
        const cheggIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "Chegg"
        );
        if (cheggIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[cheggIndex].value = emoji;
        }
        break;

      case "coursehero":
        const courseheroIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "CourseHero"
        );
        if (courseheroIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[courseheroIndex].value = emoji;
        }
        break;

      case "bartleby":
        const bartlebyIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "Bartleby"
        );
        if (bartlebyIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[bartlebyIndex].value = emoji;
        }
        break;

      case "slideshare":
        const slideshareIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "SlideShare"
        );
        if (slideshareIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[slideshareIndex].value = emoji;
        }
        break;

      case "scribd":
        const scribdIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "Scribd"
        );
        if (scribdIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[scribdIndex].value = emoji;
        }
        break;

      case "gauthmath":
        const gauthmathIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "GauthMath"
        );
        if (gauthmathIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[gauthmathIndex].value = emoji;
        }
        break;

      case "academia":
        const academiaIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "Academia"
        );
        if (academiaIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[academiaIndex].value = emoji;
        }
        break;

      case "brainly":
        const brainlyIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "Brainly"
        );
        if (brainlyIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[brainlyIndex].value = emoji;
        }
        break;

      case "numerade":
        const numeradeIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "Numerade"
        );
        if (numeradeIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[numeradeIndex].value = emoji;
        }
        break;

      case "studocu":
        const studocuIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "Studocu"
        );
        if (studocuIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[studocuIndex].value = emoji;
        }
        break;

      case "chatgpt":
        const chatgptIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "ChatGPT"
        );
        if (chatgptIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[chatgptIndex].value = emoji;
        }
        break;

      case "docgen":
        const docgenIndex = targetMessage.embeds[0].fields.findIndex(
          (field) => field.name === "DocGen"
        );
        if (docgenIndex >= 0) {
          let emoji = "";
          if (status === "online") {
            emoji =
              "<:on1:1102912283774033951><:on2:1102912288995950683><:on3:1102912293936828456>";
          } else if (status === "moderate") {
            emoji =
              "<:mod1:1102997197945049119><:mod2:1102997202936287293><:mod3:1102997208091066458><:mod4:1103541542662180864>";
          } else {
            emoji =
              "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>";
          }
          targetMessage.embeds[0].fields[docgenIndex].value = emoji;
        }
        break;

      default:
        await interaction.reply({
          content: `Unknown field "${field}".`,
          ephemeral: true,
        });
        return;
    }

    if (!targetMessage.embeds || targetMessage.embeds.length === 0) {
      console.error("Failed to edit message: no embeds found");
      return interaction.reply({
        content: "Failed to update status. Please try again later.",
        ephemeral: true,
      });
    }

    try {
      await targetMessage.edit({ embeds: [targetMessage.embeds[0]] });
      await interaction.reply({
        content: `Successfully updated "${field}" field to "${status}".`,
        ephemeral: true,
      });
    } catch (error) {
      console.error(`Failed to edit message: ${error}`);
      return interaction.reply({
        content: "Failed to update status. Please try again later.",
        ephemeral: true,
      });
    }

    if (!interaction.replied) {
      await interaction.reply({
        content: `Updated ${field} status to ${status}.`,
        ephemeral: true,
      });
    }
  }

  if (interaction.commandName === "ping") {
    const pingEmbed = new EmbedBuilder()
      .setColor("#FFFFFF")
      .setTitle("Bot Connection")
      .setDescription(
        `Pong! Latency is ${Date.now() - interaction.createdTimestamp}ms.`
      );

    await interaction.reply({
      embeds: [pingEmbed],
      ephemeral: true,
    });
  }

  if (interaction.commandName === "uptime") {
    const uptime = process.uptime();
    const formattedUptime = formatDuration(uptime * 1000);

    const uptimemebed = new EmbedBuilder()
      .setColor("#FFFFFF")
      .setTitle("Bot Uptime")
      .setDescription(`The bot has been online for ${formattedUptime}.`);

    return interaction.reply({ embeds: [uptimemebed], ephemeral: true });
  }
});

function formatDuration(duration) {
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));

  const parts = [];

  if (days > 0) {
    parts.push(`${days}d`);
  }
  if (hours > 0) {
    parts.push(`${hours}h`);
  }
  if (minutes > 0) {
    parts.push(`${minutes}m`);
  }
  if (seconds > 0) {
    parts.push(`${seconds}s`);
  }

  return parts.join(" ");
}

client.on("messageCreate", async (message) => {
  if (!(message.content.toLowerCase() === "?run")) return;

  const FirstEmbed = new EmbedBuilder()
    .setTitle("Module Status")
    .addFields({
      name: "Chegg",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .addFields({
      name: "CourseHero",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .addFields({
      name: "Bartleby",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .addFields({
      name: "SlideShare",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .addFields({
      name: "Scribd",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .addFields({
      name: "GauthMath",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .addFields({
      name: "Academia",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .addFields({
      name: "Brainly",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .addFields({
      name: "Numerade",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .addFields({
      name: "Studocu",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .addFields({
      name: "ChatGPT",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .addFields({
      name: "DocGen",
      value:
        "<:off1:1102912358688489534><:off2:1102912363449032714><:off3:1102912367140020264>",
      inline: true,
    })
    .setColor("#FFFFFF");

  await message.channel.send({ embeds: [FirstEmbed] });
});

client.login(discordToken);
