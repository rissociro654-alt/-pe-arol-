const HaxBall = require('haxball.js');

// Configuración
const ROOM_LINK = 'https://www.haxball.com/room/https://www.haxball.com/play?c=6tNpoN9KY3Y
const BOT_NAME = 'Bot-SuperHost';

// Conectar a la room
HaxBall.joinRoom(ROOM_LINK, {
  name: BOT_NAME,
  noPlayer: false, // El bot entra como jugador
  skill: 5,
  avatar: '🤖'
});

// Cuando el bot se conecta
HaxBall.onConnected = function() {
  console.log(`✅ ${BOT_NAME} conectado a la room`);
  console.log('🎮 Bot entrando como jugador...');
};

// Si el bot se desconecta, reconecta automáticamente
HaxBall.onDisconnected = function() {
  console.log('⚠️ Bot desconectado! Reconectando en 10 segundos...');
  setTimeout(() => {
    HaxBall.joinRoom(ROOM_LINK, {
      name: BOT_NAME,
      noPlayer: false,
      skill: 5,
      avatar: '🤖'
    });
  }, 10000);
};

// El bot permanece en la room
HaxBall.onPlayerJoin = function(player) {
  if (player.name !== BOT_NAME) {
    console.log(`👤 ${player.name} se unió a la room`);
  }
};

HaxBall.onPlayerLeave = function(player) {
  console.log(`👤 ${player.name} salió de la room`);
};

// Mantener activo
setInterval(() => {
  console.log('Bot activo en room...', new Date().toLocaleTimeString());
}, 60000);
