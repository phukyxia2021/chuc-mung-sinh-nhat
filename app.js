/**
 * CHÚC MỪNG SINH NHẬT - ỨNG DỤNG MOBILE CHUYÊN BIỆT CHO 8 NGƯỜI BẠN
 * Đầy đủ animation sống động, âm thanh Web Audio và phong cách nghề nghiệp đặc thù
 */

// ==========================================
// 1. DỮ LIỆU 8 NHÂN VẬT SINH NHẬT
// ==========================================
const PEOPLE_DATA = [
  {
    id: "se-xia",
    name: "Sê Xia",
    role: "Kỹ Sư Điện Tử & Vi Mạch",
    badge: "⚡ Tech Master",
    themeClass: "theme-electronics",
    color1: "#00f2fe",
    color2: "#4facfe",
    avatarIcon: "⚡",
    shortDesc: "Chuyên gia bo mạch, chip bán dẫn & công nghệ cao",
    interactiveTitle: "TRẠM VI XỬ LÝ SINH NHẬT 4.0",
    interactiveActionText: "Kích Hoạt Xung Nhịp Ép Xung 999GHz ⚡",
    interactiveDesc: "Nhấn nút để kích hoạt dòng điện hạnh phúc siêu dẫn chạy xuyên suốt bo mạch!",
    wishes: {
      headline: "Chúc Mừng Sinh Nhật Sê Xia!",
      poem: `Điện áp tình yêu luôn ổn định,\nTrái tim bền vững chẳng chập tia.\nTuổi mới debug êm ru hết,\nThành công thăng tiến rực muôn bề!`,
      detail: `Chúc Sê Xia tuổi mới:\n• Trái tim không bao giờ bị "ngắn mạch", nhiệt huyết luôn đạt công suất tối đa!\n• Năng lượng dồi dào, kháng trở cuộc đời luôn về 0, dòng tiền chạy vào ví tỷ lệ thuận với tần số GHz!\n• Bất kể dự án phần cứng hay phần mềm đều "Pass QC" mượt mà ngay lần test đầu tiên!`
    }
  },
  {
    id: "gia-quyet",
    name: "Gia Quyết",
    role: "Cán Bộ Đoàn Thanh Niên Việt Nam",
    badge: "🚩 Khát Vọng Tuổi Trẻ",
    themeClass: "theme-youth-union",
    color1: "#005ba4",
    color2: "#d90429",
    avatarIcon: "🚩",
    shortDesc: "Nhiệt huyết thanh xuân, tiên phong dẫn lối phong trào",
    interactiveTitle: "NGỌN ĐUỐC THANH NIÊN TỎA SÁNG",
    interactiveActionText: "Thắp Sáng Ngọn Lửa Tình Nguyện 🔥",
    interactiveDesc: "Giương cao ngọn cờ nhiệt huyết tuổi trẻ xung kích!",
    wishes: {
      headline: "Chúc Mừng Sinh Nhật Đồng Chí Gia Quyết!",
      poem: `Áo xanh thắm đượm chí kiên cường,\nNhiệt huyết thanh xuân rạng nẻo đường.\nTuổi mới tiên phong ngời ý chí,\nPhong trào nở rộ ngát muôn phương!`,
      detail: `Chúc đồng chí Gia Quyết tuổi mới:\n• Sức khỏe dẻo dai như cây lim, tinh thần rực cháy như lửa nhiệt huyết thanh niên!\n• Luôn là ngọn cờ đầu truyền cảm hứng, dẫn dắt phong trào Đoàn gặt hái vô vàn bằng khen và chiến tích vẻ vang!\n• Cuộc sống đong đầy niềm vui, đồng chí đồng đội luôn kề vai sát cánh!`
    }
  },
  {
    id: "khai-ninh",
    name: "Khải Ninh",
    role: "Chiến Thần Công Nhân Khu Công Nghiệp",
    badge: "⚙️ Bàn Tay Vàng KCN",
    themeClass: "theme-industry",
    color1: "#f4a261",
    color2: "#e76f51",
    avatarIcon: "⚙️",
    shortDesc: "Vững vàng dây chuyền, bàn tay vàng năng suất vượt trội",
    interactiveTitle: "DÂY CHUYỀN SẢN XUẤT THÀNH CÔNG",
    interactiveActionText: "Tăng Tốc Dây Chuyền KPI 200% ⚙️",
    interactiveDesc: "Khởi động toàn bộ động cơ bánh răng vàng năng suất!",
    wishes: {
      headline: "Chúc Mừng Sinh Nhật Khải Ninh!",
      poem: `Dây chuyền nhịp bước vững vàng thay,\nNăng suất tăng cao mỗi một ngày.\nAn toàn lao động niềm vui lớn,\nThưởng lớn lương cao ấm đôi tay!`,
      detail: `Chúc Khải Ninh tuổi mới:\n• Bền bỉ và vững chãi như thép luyện công trình, sức khỏe dồi dào, tay nghề ngày một tinh xảo!\n• Ca kíp chạy êm ru không một sự cố, chỉ số KPI luôn phá kỷ lục, lương thưởng tăng vọt!\n• Về nhà luôn có tiếng cười ấm áp, hạnh phúc viên mãn trọn vẹn!`
    }
  },
  {
    id: "gia-huy",
    name: "Gia Huy",
    role: "Đại Gia Nông Nghiệp & Nuôi Trồng Thủy Sản",
    badge: "🌾 Bội Thu Mùa Vàng",
    themeClass: "theme-agriculture",
    color1: "#52b788",
    color2: "#e9c46a",
    avatarIcon: "🌾",
    shortDesc: "Đồng lúa trĩu hạt, cá lội đầy ao, mùa màng trù phú",
    interactiveTitle: "NÔNG TRẠI SINH THÁI THỊNH VƯỢNG",
    interactiveActionText: "Gặt Lúa Vàng & Bắt Cá To 🌾🐟",
    interactiveDesc: "Cùng Gia Huy thu hoạch vụ mùa bội thu ngập tràn tài lộc!",
    wishes: {
      headline: "Chúc Mừng Sinh Nhật Gia Huy!",
      poem: `Lúa trổ vàng ươm ngát ngõ đồng,\nCá quẫy đầy ao rạng nụ hồng.\nTuổi mới được mùa thêm được giá,\nTài lộc đơm hoa thỏa ước mong!`,
      detail: `Chúc Gia Huy tuổi mới:\n• Mưa thuận gió hòa, lúa trĩu bông chắc hạt, cá tôm lớn nhanh như thổi cân không xuể!\n• Đất đai sinh vàng sinh bạc, đầu tư tới đâu trúng đậm tới đó, trở thành tỷ phú nông nghiệp trứ danh!\n• Luôn giữ tâm hồn thư thái, an yên giữa thiên nhiên xanh ngát và cuộc sống đủ đầy!`
    }
  },
  {
    id: "gia-quynh",
    name: "Gia Quỳnh",
    role: "Thiên Thần Áo Trắng - Điều Dưỡng Y Tế",
    badge: "🩺 Trái Tim Y Đức",
    themeClass: "theme-medical",
    color1: "#ff758f",
    color2: "#48cae4",
    avatarIcon: "🩺",
    shortDesc: "Ân cần chăm sóc, nụ cười dịu hiền xoa dịu nỗi đau",
    interactiveTitle: "TRẠM NĂNG LƯỢNG YÊU THƯƠNG",
    interactiveActionText: "Tiêm Liều Vitamin Hạnh Phúc 1000mg 💖",
    interactiveDesc: "Kích hoạt xung nhịp tim tình thương lan tỏa khắp mọi người!",
    wishes: {
      headline: "Chúc Mừng Sinh Nhật Gia Quỳnh!",
      poem: `Áo trắng thiên thần nét thảo thơm,\nNụ cười xua bớt nỗi lo âu.\nTrực đêm vẫn rạng ngời tươi tắn,\nHạnh phúc bình an ngập tháng ngày!`,
      detail: `Chúc Gia Quỳnh tuổi mới:\n• Nhịp tim luôn đập rộn ràng yêu đời, huyết áp hạnh phúc luôn ở mức lý tưởng 120/80!\n• Trực đêm nhẹ nhàng, bệnh nhân yêu mến, đồng nghiệp sẻ chia, tay nghề điều dưỡng ngày càng xuất sắc!\n• Mãi giữ nét dịu dàng, xinh đẹp và luôn được cuộc đời yêu thương, chiều chuộng!`
    }
  },
  {
    id: "thanh-hau",
    name: "Thanh Hậu",
    role: "Kiện Tướng Liên Quân Mobile",
    badge: "🎮 Cao Thủ Thách Đấu",
    themeClass: "theme-esports",
    color1: "#ffd700",
    color2: "#9b5de5",
    avatarIcon: "🎮",
    shortDesc: "Chiến thần đường rồng, gánh team bất bại, leo rank thần tốc",
    interactiveTitle: "ĐẤU TRƯỜNG HUYỀN THOẠI ARENA",
    interactiveActionText: "Bật Chiêu Cuối MEGA KILL ⚔️🔥",
    interactiveDesc: "Phá trụ quét sạch team bạn và ẵm cúp vô địch sinh nhật!",
    wishes: {
      headline: "VICTORY! Chúc Mừng Sinh Nhật Thanh Hậu!",
      poem: `Combat chuẩn xác lướt mây ngàn,\nMega Kill rực rỡ vang lừng vang.\nThách Đấu trong tay ngôi vương định,\nSinh nhật vinh quang sáng khải hoàn!`,
      detail: `Chúc Kiện Tướng Thanh Hậu tuổi mới:\n• Leo Thách Đấu sao tăng vùn vụt, tỷ lệ thắng luôn 100%, cầm vị tướng nào cũng gánh team outplay cả bản đồ!\n• Ping luôn xanh mướt dưới 10ms, đồng đội hiểu ý, không bao giờ gặp tạ!\n• Ngoài đời trang bị full 6 món đồ xịn: Tiền tài, Sức khỏe, May mắn, Thành công, Tình duyên và Đẳng cấp!`
    }
  },
  {
    id: "nguyen-nguyen",
    name: "Nguyên Nguyễn",
    role: "Chuyên Gia Công Nghệ Ô Tô",
    badge: "🏎️ Mã Lực Đỉnh Cao",
    themeClass: "theme-automotive",
    color1: "#ff3838",
    color2: "#2d3436",
    avatarIcon: "🏎️",
    shortDesc: "Động cơ tốc độ, chuẩn đoán chuẩn xác, vút ga mã lực",
    interactiveTitle: "TRẠM DYNO TEST ĐỘNG CƠ SIÊU CẤP",
    interactiveActionText: "Đạp Hết Chân Ga Bơm Nitro 🏎️💨",
    interactiveDesc: "Kéo kịch kim đồng hồ tốc độ lên đỉnh cao mã lực!",
    wishes: {
      headline: "Chúc Mừng Sinh Nhật Nguyên Nguyễn!",
      poem: `Mã lực gầm vang vút nẻo xa,\nVô lăng vững lái vượt phong ba.\nTuổi mới ga lên đường thênh thang,\nThành công bứt tốc rạng muôn nhà!`,
      detail: `Chúc Nguyên Nguyễn tuổi mới:\n• Động cơ cuộc đời luôn vận hành êm ái, mô-men xoắn thành công đạt cực đại không giới hạn!\n• Làm chủ mọi công nghệ xe tiên tiến nhất thế giới, chẩn đoán pan bệnh nào là dứt điểm pan bệnh đó!\n• Vững tay lái trên mọi cung đường đời, tăng tốc ngoạn mục cán đích ước mơ!`
    }
  },
  {
    id: "hung-nguyen",
    name: "Hưng Nguyễn",
    role: "Phù Thủy Sửa Xe Máy - Bàn Tay Vàng Cơ Khí",
    badge: "🔧 Bác Sĩ Xế Cưng",
    themeClass: "theme-motorcycle",
    color1: "#ff6b35",
    color2: "#004e89",
    avatarIcon: "🔧",
    shortDesc: "Cân mọi dòng xe, nổ máy giòn tan, trị dứt điểm mọi bệnh",
    interactiveTitle: "XƯỞNG ĐỘC QUYỀN HI-PERFORMANCE",
    interactiveActionText: "Nổ Máy Giòn Tan & Đánh Bugi 🔧⚡",
    interactiveDesc: "Gõ cờ lê nhịp điệu và nẹt lửa bugi bốc lửa đam mê xế độ!",
    wishes: {
      headline: "Chúc Mừng Sinh Nhật Hưng Nguyễn!",
      poem: `Cờ lê gõ nhịp tiếng pô vang,\nXe êm máy bốc khách rộn ràng.\nTuổi mới tiệm đông tài lộc tấn,\nBàn tay vàng sáng nét vẻ vang!`,
      detail: `Chúc Hưng Nguyễn tuổi mới:\n• Bắt đúng bệnh - bốc êm máy: Xe nào vào tiệm cũng ra lò mượt mà như xe mới xuất xưởng!\n• Khách ra vào nườm nượp, đếm tiền mỏi tay, uy tín tiệm sửa xe vang danh khắp vùng!\n• Đam mê xe cộ luôn cháy bỏng, gia đình hạnh phúc, sức khỏe dồi dào, vạn sự hanh thông!`
    }
  }
];

// ==========================================
// 2. NHẠC NỀN & HIỆU ỨNG ÂM THANH (VŨ TRƯỜNG & BAR CLUB REMIX)
// ==========================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.bgAudio = null;
    this.melodyTimeout = null;
    this.audioSourceNode = null;
    this.bassFilter = null;
    this.compressor = null;
    this.isBassBoost = true;
    this.currentTrackName = "Vũ Trường Vinahouse (VN88)";
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (!this.bgAudio) {
      this.bgAudio = document.getElementById('bg-audio');
      if (this.bgAudio) {
        this.bgAudio.volume = 0.9;
        this.bgAudio.addEventListener('play', () => {
          this.isPlaying = true;
          updateMusicButtonUI();
        });
        this.bgAudio.addEventListener('pause', () => {
          this.isPlaying = false;
          updateMusicButtonUI();
        });
        this.bgAudio.addEventListener('ended', () => {
          if (!this.bgAudio.loop) {
            this.isPlaying = false;
            updateMusicButtonUI();
          }
        });
      }
    }

    this.setupBassNodes();
  }

  setupBassNodes() {
    if (!this.bgAudio || !this.ctx || this.audioSourceNode) return;
    try {
      this.audioSourceNode = this.ctx.createMediaElementSource(this.bgAudio);

      // Low-shelf filter tăng dải trầm 110Hz (+10dB) tạo độ rung chuyển như loa Sub Bar/Vũ trường
      this.bassFilter = this.ctx.createBiquadFilter();
      this.bassFilter.type = 'lowshelf';
      this.bassFilter.frequency.value = 110;
      this.bassFilter.gain.value = this.isBassBoost ? 10 : 0;

      // Dynamics Compressor nén âm thanh cho tiếng đập chắc nịch, punchy
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.value = -16;
      this.compressor.knee.value = 12;
      this.compressor.ratio.value = 8;
      this.compressor.attack.value = 0.003;
      this.compressor.release.value = 0.25;

      this.audioSourceNode.connect(this.bassFilter);
      this.bassFilter.connect(this.compressor);
      this.compressor.connect(this.ctx.destination);
    } catch (e) {
      console.warn("Audio node setup fallback to direct output:", e);
    }
  }

  toggleBassBoost() {
    this.isBassBoost = !this.isBassBoost;
    if (this.bassFilter) {
      this.bassFilter.gain.value = this.isBassBoost ? 10 : 0;
    }
    const btnBass = document.getElementById('btn-bass');
    if (btnBass) {
      if (this.isBassBoost) {
        btnBass.classList.add('active');
        showToast("🔊 Siêu trầm BASS BOOST: BẬT! Đập rung màn hình! 💥");
      } else {
        btnBass.classList.remove('active');
        showToast("🔉 BASS BOOST: ĐÃ TẮT");
      }
    }
  }

  switchTrack(trackSrc, trackName) {
    this.init();
    if (!this.bgAudio) return;
    const wasPlaying = this.isPlaying;
    this.currentTrackName = trackName || "Happy Birthday Remix";
    this.bgAudio.src = trackSrc;
    this.bgAudio.load();
    if (wasPlaying) {
      this.playHappyBirthday(true);
    }
    showToast(`🎛️ Đã chuyển sang: ${this.currentTrackName} 🔥 Quẩy lên!`);
  }

  // Tiếng Beep nốt nhạc
  playTone(freq, duration, type = 'sine', gainVal = 0.15) {
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  // Âm thanh click vui nhộn
  playPop() {
    this.playTone(587.33, 0.1, 'triangle', 0.2); // D5
    setTimeout(() => this.playTone(880, 0.15, 'sine', 0.2), 60); // A5
  }

  // Âm thanh thổi nến (tiếng gió whoosh)
  playBlow() {
    this.init();
    if (!this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * 0.5;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.5);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
    } catch(e) {}
  }

  // Âm thanh pháo hoa bùng nổ
  playFireworks() {
    this.init();
    this.playTone(200, 0.3, 'square', 0.15);
    setTimeout(() => {
      this.playTone(600, 0.4, 'sine', 0.2);
      this.playTone(800, 0.4, 'triangle', 0.2);
    }, 120);
  }

  // Phát bài Happy Birthday Remix (sử dụng file audio MP3 Remix sôi động)
  playHappyBirthday(loop = true) {
    this.init();
    if (this.bgAudio) {
      this.bgAudio.loop = loop;
      const promise = this.bgAudio.play();
      if (promise !== undefined) {
        return promise.then(() => {
          this.isPlaying = true;
          updateMusicButtonUI();
          return true;
        }).catch(err => {
          console.warn("Direct play blocked or error:", err);
          return Promise.reject(err);
        });
      }
      this.isPlaying = true;
      updateMusicButtonUI();
      return Promise.resolve(true);
    } else {
      this.playHappyBirthdaySynth(loop);
      return Promise.resolve(true);
    }
  }

  // Giai điệu tổng hợp Web Audio dự phòng nếu trình duyệt chặn file audio
  playHappyBirthdaySynth(loop = true) {
    this.init();
    this.isPlaying = true;
    updateMusicButtonUI();

    const notes = [
      { f: 392.00, d: 240 },
      { f: 392.00, d: 240 },
      { f: 440.00, d: 450 },
      { f: 392.00, d: 450 },
      { f: 523.25, d: 450 },
      { f: 493.88, d: 850 },

      { f: 392.00, d: 240 },
      { f: 392.00, d: 240 },
      { f: 440.00, d: 450 },
      { f: 392.00, d: 450 },
      { f: 587.33, d: 450 },
      { f: 523.25, d: 850 },

      { f: 392.00, d: 240 },
      { f: 392.00, d: 240 },
      { f: 783.99, d: 450 },
      { f: 659.25, d: 450 },
      { f: 523.25, d: 450 },
      { f: 493.88, d: 450 }, 
      { f: 440.00, d: 650 },

      { f: 698.46, d: 240 },
      { f: 698.46, d: 240 },
      { f: 659.25, d: 450 },
      { f: 523.25, d: 450 },
      { f: 587.33, d: 450 },
      { f: 523.25, d: 1000 }
    ];

    let currentStep = 0;
    const playNext = () => {
      if (!this.isPlaying) return;
      if (currentStep >= notes.length) {
        if (loop) {
          currentStep = 0;
          this.melodyTimeout = setTimeout(playNext, 1000);
        } else {
          this.isPlaying = false;
          updateMusicButtonUI();
        }
        return;
      }
      const note = notes[currentStep];
      this.playTone(note.f, (note.d / 1000) * 0.9, 'triangle', 0.22);
      currentStep++;
      this.melodyTimeout = setTimeout(playNext, note.d + 30);
    };

    playNext();
  }

  stopMusic() {
    this.isPlaying = false;
    if (this.bgAudio) {
      this.bgAudio.pause();
    }
    if (this.melodyTimeout) {
      clearTimeout(this.melodyTimeout);
      this.melodyTimeout = null;
    }
    updateMusicButtonUI();
  }

  toggleMusic() {
    this.init();
    if (this.isPlaying) {
      this.stopMusic();
      showToast("🔇 Đã tạm dừng nhạc!");
    } else {
      this.playHappyBirthday(true);
      showToast(`🔥 Đang phát: ${this.currentTrackName} 💥`);
    }
    updateMusicButtonUI();
  }
}

const sound = new SoundFX();

function updateMusicButtonUI() {
  const btnMusic = document.getElementById('btn-music');
  const appContainer = document.querySelector('.app-container');
  if (btnMusic) {
    if (sound.isPlaying) {
      btnMusic.classList.add('music-playing');
    } else {
      btnMusic.classList.remove('music-playing');
    }
  }
  if (appContainer) {
    if (sound.isPlaying) {
      appContainer.classList.add('club-lights');
    } else {
      appContainer.classList.remove('club-lights');
    }
  }
}

// ==========================================
// 3. CANVAS CONFETTI / FIREWORKS ENGINE
// ==========================================
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let animFrameId = null;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color || ['#ff4757', '#ffa502', '#2ed573', '#1e90ff', '#9b59b6', '#ffd32a'][Math.floor(Math.random() * 6)];
    this.size = Math.random() * 8 + 4;
    this.speedX = (Math.random() - 0.5) * 12;
    this.speedY = Math.random() * -12 - 4;
    this.gravity = 0.35;
    this.rotation = Math.random() * 360;
    this.rotSpeed = (Math.random() - 0.5) * 10;
    this.opacity = 1;
    this.shape = Math.random() > 0.4 ? 'rect' : 'circle';
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += this.gravity;
    this.rotation += this.rotSpeed;
    this.opacity -= 0.012;
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.fillStyle = this.color;
    if (this.shape === 'rect') {
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}

function launchConfetti(originX, originY, count = 65) {
  const x = originX || window.innerWidth / 2;
  const y = originY || window.innerHeight * 0.4;
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(x, y));
  }
  if (!animFrameId) {
    animateConfetti();
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].opacity <= 0 || particles[i].y > canvas.height + 20) {
      particles.splice(i, 1);
    }
  }
  if (particles.length > 0) {
    animFrameId = requestAnimationFrame(animateConfetti);
  } else {
    animFrameId = null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

// ==========================================
// 4. RENDER VÀ ĐIỀU HƯỚNG GIAO DIỆN
// ==========================================
const homeView = document.getElementById('home-view');
const detailView = document.getElementById('detail-view');
const detailContainer = document.getElementById('detail-container');
const btnBack = document.getElementById('btn-back');
const peopleGrid = document.getElementById('people-grid');

let currentPerson = null;

// Render 8 icon trang chủ
function renderPeopleGrid() {
  peopleGrid.innerHTML = '';
  PEOPLE_DATA.forEach(person => {
    const card = document.createElement('div');
    card.className = `person-card`;
    card.style.setProperty('--card-color-1', person.color1);
    card.style.setProperty('--card-color-2', person.color2);
    card.style.setProperty('--accent-color', person.color1);

    card.innerHTML = `
      <div class="avatar-wrapper">
        <div class="avatar-halo"></div>
        <div class="avatar-icon">${person.avatarIcon}</div>
        <div class="card-badge">${person.badge.split(' ')[0]}</div>
      </div>
      <div class="person-name">${person.name}</div>
      <div class="person-career-tag">${person.role}</div>
      <div class="card-arrow">➜</div>
    `;

    card.addEventListener('click', () => {
      sound.playPop();
      openDetailView(person);
    });

    peopleGrid.appendChild(card);
  });
}

// Mở trang chi tiết sinh nhật
function openDetailView(person) {
  currentPerson = person;
  homeView.classList.remove('active-view');
  detailView.classList.add('active-view');
  detailView.className = `view active-view ${person.themeClass}`;
  btnBack.classList.remove('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render nội dung cá nhân hóa
  renderPersonDetail(person);

  // Kích hoạt pháo hoa chào đón
  launchConfetti(window.innerWidth / 2, window.innerHeight * 0.35, 70);
  sound.playFireworks();
}

// Trở về trang chủ
function backToHome() {
  sound.playPop();
  detailView.classList.remove('active-view');
  homeView.classList.add('active-view');
  btnBack.classList.add('hidden');
  currentPerson = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

btnBack.addEventListener('click', backToHome);

// Render nội dung trang chi tiết với từng nghề nghiệp
function renderPersonDetail(person) {
  // Lấy lời chúc tùy chỉnh đã lưu trong localStorage nếu có
  const savedWishes = JSON.parse(localStorage.getItem(`wishes_${person.id}`) || '[]');
  const savedWishesHtml = savedWishes.length > 0 
    ? `<div class="extra-wishes-box" style="margin-top:14px; padding-top:12px; border-top:1px dashed rgba(255,255,255,0.2);">
        <div style="font-size:0.85rem; color:#feca57; font-weight:700; margin-bottom:8px;">💌 Lời chúc từ bạn bè vừa gửi:</div>
        ${savedWishes.map(w => `<div style="background:rgba(255,255,255,0.07); padding:8px 12px; border-radius:10px; margin-bottom:6px; font-size:0.88rem;">❤️ "${w}"</div>`).join('')}
       </div>`
    : '';

  // Khối hoạt họa nghề nghiệp chuyên biệt
  let careerGraphicHtml = '';
  if (person.id === 'se-xia') {
    careerGraphicHtml = `
      <div class="circuit-board">
        <div class="circuit-line l1"></div>
        <div class="chip-unit">MCU</div>
        <div class="circuit-line l2"></div>
      </div>
      <div id="tech-readout" style="font-family:var(--font-tech); font-size:0.85rem; color:#00f2fe; margin-top:6px;">
        Clock Speed: 3.8 GHz | Temp: 36.5°C | Status: OVERCLOCKED 🎉
      </div>
    `;
  } else if (person.id === 'gia-quyet') {
    careerGraphicHtml = `
      <div class="torch-animation-box">
        <span class="flag-banner">🇻🇳</span>
        <span style="font-size:2.8rem; filter:drop-shadow(0 0 12px #ff4757);">🔥</span>
        <span class="flag-banner">⭐</span>
      </div>
      <div style="font-weight:700; color:#ffd700; font-size:0.9rem;">
        "ĐÂU CẦN THANH NIÊN CÓ - ĐÂU KHÓ CÓ THANH NIÊN"
      </div>
    `;
  } else if (person.id === 'khai-ninh') {
    careerGraphicHtml = `
      <div class="gears-container">
        <span class="gear-icon gear-1">⚙️</span>
        <span class="gear-icon gear-2">⚙️</span>
        <span style="font-size:2.2rem; filter:drop-shadow(0 0 8px #f4a261);">🏭</span>
      </div>
      <div id="industry-kpi" style="font-size:0.9rem; font-weight:700; color:#f4a261;">
        HIỆU SUẤT XƯỞNG: 100% | KHÔNG LỖI | AN TOÀN TUYỆT ĐỐI
      </div>
    `;
  } else if (person.id === 'gia-huy') {
    careerGraphicHtml = `
      <div class="farm-scenery">
        <span class="rice-stalk">🌾</span>
        <span style="font-size:1.8rem; animation: floatAround 3s infinite alternate;">🕊️</span>
        <span class="jumping-fish">🐟</span>
        <span class="rice-stalk">🌾</span>
      </div>
      <div style="font-size:0.9rem; font-weight:700; color:#95d5b2;">
        MÙA VÀNG BỘI THU - TÔM CÁ ĐẦY KHOANG
      </div>
    `;
  } else if (person.id === 'gia-quynh') {
    careerGraphicHtml = `
      <div class="ecg-monitor">
        <svg class="ecg-svg" viewBox="0 0 300 40">
          <path d="M 0 20 L 50 20 L 60 5 L 70 35 L 80 15 L 90 25 L 100 20 L 160 20 L 170 5 L 180 35 L 190 15 L 200 25 L 210 20 L 300 20" />
        </svg>
      </div>
      <div id="heart-rate-stat" style="font-size:0.9rem; font-weight:700; color:#ff758f;">
        PULSE: 75 BPM | SP02: 100% | CHỈ SỐ HẠNH PHÚC: CỰC ĐẠI 💖
      </div>
    `;
  } else if (person.id === 'thanh-hau') {
    careerGraphicHtml = `
      <div class="rank-badge-box">
        <span style="font-size:2.4rem;">🏆</span>
        <div class="victory-stamp">VICTORY</div>
        <span style="font-size:2.4rem;">⚔️</span>
      </div>
      <div style="font-family:var(--font-display); font-size:0.9rem; color:#ffd700; letter-spacing:0.5px;">
        RANK: CAO THỦ THÁCH ĐẤU ★★★★★
      </div>
    `;
  } else if (person.id === 'nguyen-nguyen') {
    careerGraphicHtml = `
      <div class="speedometer-box">
        <div class="speedo-number" id="car-speed">240</div>
        <div class="speedo-unit">KM/H • TURBO BOOST ACTIVATED</div>
      </div>
      <div style="font-weight:700; color:#ff3838; font-size:0.88rem;">
        V12 TWIN-TURBO • 850 HP • TỐC ĐỘ DẪN ĐẦU
      </div>
    `;
  } else if (person.id === 'hung-nguyen') {
    careerGraphicHtml = `
      <div class="wrench-spark-box">
        <span class="wrench-cross">🔧</span>
        <span style="font-size:2.6rem; filter:drop-shadow(0 0 10px #ff6b35);">🏍️</span>
        <span class="wrench-cross" style="animation-delay:0.5s;">🔩</span>
      </div>
      <div style="font-weight:700; color:#ff8c00; font-size:0.88rem;">
        MÁY NỔ ÊM RU • TAY NGHỀ ĐẲNG CẤP • KHÁCH HÀNG TIN YÊU
      </div>
    `;
  }

  detailContainer.innerHTML = `
    <!-- Khối Banner Profile -->
    <div class="profile-hero">
      <div class="profile-avatar-box">
        <span class="profile-icon">${person.avatarIcon}</span>
      </div>
      <div class="profile-title-row">
        <span class="happy-birthday-badge">${person.badge}</span>
      </div>
      <h1 class="profile-hero-name">${person.name}</h1>
      <p class="profile-hero-role">${person.role}</p>
    </div>

    <!-- Khối Bánh Sinh Nhật Tương Tác -->
    <div class="cake-interactive-box">
      <div style="font-size:0.88rem; font-weight:700; color:#feca57; margin-bottom:6px;">🎂 BÁNH SINH NHẬT ĐẶC BIỆT</div>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:10px;">Chạm vào nến hoặc bấm nút bên dưới để thổi nến chúc mừng!</p>
      
      <div class="cake-wrapper" id="cake-interactive">
        <div class="candle-box">
          <div class="candle">
            <div class="flame" id="flame-1"></div>
            <div class="smoke">💨</div>
          </div>
          <div class="candle">
            <div class="flame" id="flame-2"></div>
            <div class="smoke">💨</div>
          </div>
          <div class="candle">
            <div class="flame" id="flame-3"></div>
            <div class="smoke">💨</div>
          </div>
        </div>
        <div class="cake-layers">
          <div class="cake-tier-top"></div>
          <div class="cake-tier-bottom"></div>
          <div class="cake-plate"></div>
        </div>
      </div>

      <button class="btn-blow-candle" id="btn-blow-candle">
        <span>💨 Thổi Nến & Bật Nhạc Remix 🎵</span>
      </button>
    </div>

    <!-- Khối Tương Tác Chuyên Biệt Theo Từng Nghề -->
    <div class="career-interactive-container">
      <div class="interactive-title">${person.interactiveTitle}</div>
      ${careerGraphicHtml}
      <button class="btn-primary-action" id="btn-career-interact" style="background: linear-gradient(135deg, ${person.color1}, ${person.color2});">
        <span>${person.interactiveActionText}</span>
      </button>
      <p style="font-size:0.78rem; color:var(--text-muted); margin-top:8px;">${person.interactiveDesc}</p>
    </div>

    <!-- Khối Lời Chúc Mừng Ý Nghĩa -->
    <div class="wish-card">
      <div class="wish-header">
        <span>🎁</span>
        <span>${person.wishes.headline}</span>
      </div>
      <div class="poem-box">
        ${person.wishes.poem.replace(/\n/g, '<br>')}
      </div>
      <div class="wish-body">
        ${person.wishes.detail.replace(/\n/g, '<br>')}
      </div>

      ${savedWishesHtml}

      <button class="btn-secondary-action" id="btn-open-wish-modal">
        <span>💌 Gửi Lời Chúc Riêng Đến ${person.name}</span>
      </button>
    </div>
  `;

  // Gắn sự kiện Thổi Nến
  const cake = document.getElementById('cake-interactive');
  const btnBlow = document.getElementById('btn-blow-candle');

  const handleBlowCandle = () => {
    sound.playBlow();
    const flames = document.querySelectorAll('.flame');
    const candles = document.querySelectorAll('.candle');
    flames.forEach(f => f.classList.add('blown-out'));
    candles.forEach(c => c.classList.add('blown-out'));

    btnBlow.innerHTML = '<span>🎉 Ước Mơ Thành Hiện Thực! ✨</span>';
    btnBlow.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

    launchConfetti(window.innerWidth / 2, window.innerHeight * 0.45, 90);
    sound.playFireworks();

    if (!sound.isPlaying) {
      sound.playHappyBirthday(true);
      updateMusicButtonUI();
    }
    showToast(`🎂 Chúc ${person.name} tuổi mới vạn sự như ý!`);
  };

  cake.addEventListener('click', handleBlowCandle);
  btnBlow.addEventListener('click', handleBlowCandle);

  // Gắn sự kiện nút tương tác nghề nghiệp
  const btnCareer = document.getElementById('btn-career-interact');
  btnCareer.addEventListener('click', () => {
    sound.playPop();
    launchConfetti(window.innerWidth / 2, window.innerHeight * 0.6, 60);

    // Xử lý hiệu ứng động riêng cho từng nghề
    if (person.id === 'se-xia') {
      const readout = document.getElementById('tech-readout');
      const randomGhz = (Math.random() * 400 + 600).toFixed(1);
      if (readout) {
        readout.innerHTML = `⚡ CLOCK: <strong style="color:#ffd700">${randomGhz} GHz</strong> | SUPERCONDUCTING 100% | ALL BUGS FIXED!`;
      }
      showToast("⚡ Kích hoạt siêu dẫn thành công! Sê Xia tuổi mới siêu tốc độ!");
    } else if (person.id === 'gia-quyet') {
      showToast("🔥 Ngọn đuốc thanh niên rực cháy! Chúc đồng chí Gia Quyết luôn tiên phong!");
    } else if (person.id === 'khai-ninh') {
      const kpi = document.getElementById('industry-kpi');
      if (kpi) {
        kpi.innerHTML = `⚙️ NĂNG SUẤT ĐẠT: <strong style="color:#00ff88">250% KPI</strong> | THƯỞNG TẾT ĐỈNH CAO!`;
      }
      showToast("⚙️ Dây chuyền tăng tốc! Chúc Khải Ninh năng suất vượt bậc!");
    } else if (person.id === 'gia-huy') {
      showToast("🌾 Lúa trúng mùa, cá đầy ao! Chúc Gia Huy đại phú đại quý!");
    } else if (person.id === 'gia-quynh') {
      const rate = document.getElementById('heart-rate-stat');
      if (rate) {
        rate.innerHTML = `💖 KHÁNG THỂ HẠNH PHÚC: <strong style="color:#ffd700">99999 IU</strong> | MÃI XINH ĐẸP!`;
      }
      showToast("💊 Đã tiêm liều Vitamin hạnh phúc trọn vẹn cho Gia Quỳnh!");
    } else if (person.id === 'thanh-hau') {
      sound.playFireworks();
      showToast("⚔️ MEGA KILL! Thanh Hậu gánh team hủy diệt bản đồ!");
    } else if (person.id === 'nguyen-nguyen') {
      const carSpeed = document.getElementById('car-speed');
      if (carSpeed) {
        let speed = 240;
        const interval = setInterval(() => {
          speed += 10;
          carSpeed.innerText = speed;
          if (speed >= 330) clearInterval(interval);
        }, 40);
      }
      showToast("🏎️ NITRO PHUN LỬA! Nguyên Nguyễn bứt tốc cán đích ngoạn mục!");
    } else if (person.id === 'hung-nguyen') {
      showToast("🔧 Bugi nổ giòn, máy êm ru! Chúc tiệm Hưng Nguyễn đông khách mỏi tay!");
    }
  });

  // Mở modal gửi lời chúc
  const btnOpenModal = document.getElementById('btn-open-wish-modal');
  btnOpenModal.addEventListener('click', () => {
    openWishModal(person);
  });
}

// ==========================================
// 5. MODAL GỬI LỜI CHÚC & TOAST
// ==========================================
const wishModal = document.getElementById('wish-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const modalPersonName = document.getElementById('modal-person-name');
const modalWishInput = document.getElementById('modal-wish-input');
const btnSendWish = document.getElementById('btn-send-wish');
const quickTags = document.querySelectorAll('.quick-tag');
const toast = document.getElementById('toast');

function openWishModal(person) {
  modalPersonName.innerText = person.name;
  modalWishInput.value = '';
  wishModal.classList.remove('hidden');
}

function closeWishModal() {
  wishModal.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeWishModal);
wishModal.addEventListener('click', (e) => {
  if (e.target === wishModal) closeWishModal();
});

quickTags.forEach(tag => {
  tag.addEventListener('click', () => {
    modalWishInput.value = tag.getAttribute('data-text');
  });
});

btnSendWish.addEventListener('click', () => {
  const wishText = modalWishInput.value.trim();
  if (!wishText) {
    showToast("Vui lòng nhập hoặc chọn lời chúc trước nhé! 😊");
    return;
  }

  // Lưu lời chúc vào localStorage
  if (currentPerson) {
    const key = `wishes_${currentPerson.id}`;
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push(wishText);
    localStorage.setItem(key, JSON.stringify(existing));

    closeWishModal();
    sound.playFireworks();
    launchConfetti(window.innerWidth / 2, window.innerHeight * 0.4, 80);
    showToast(`💌 Lời chúc đã được gửi đến ${currentPerson.name}!`);

    // Cập nhật lại giao diện người đó để thấy ngay lời chúc mới
    renderPersonDetail(currentPerson);
  }
});

let toastTimeout = null;
function showToast(message) {
  if (toastTimeout) clearTimeout(toastTimeout);
  toast.innerText = message;
  toast.classList.remove('hidden');
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2800);
}

// ==========================================
// 6. KHỞI TẠO ỨNG DỤNG & TỰ ĐỘNG PHÁT NHẠC (AUTOPLAY)
// ==========================================
function startAutoplay() {
  sound.init();

  // Thử tự động phát ngay khi trang vừa tải
  const playPromise = sound.playHappyBirthday(true);

  if (playPromise && playPromise.then) {
    playPromise.then(() => {
      showToast(`🔥 Đang phát: ${sound.currentTrackName} 💥`);
    }).catch(() => {
      // Trình duyệt (Chrome, Safari, iOS, Android) chặn autoplay có tiếng khi chưa có tương tác
      // Lắng nghe tương tác đầu tiên của người dùng (chạm, click, bấm phím) để phát nhạc ngay lập tức
      const triggerPlayOnFirstGesture = () => {
        if (!sound.isPlaying) {
          sound.playHappyBirthday(true).then(() => {
            showToast(`🔥 Đang phát: ${sound.currentTrackName} 💥`);
          }).catch(err => console.warn("Gesture play error:", err));
        }
        removeGestureListeners();
      };

      const removeGestureListeners = () => {
        ['click', 'touchstart', 'pointerdown', 'keydown'].forEach(evt => {
          document.removeEventListener(evt, triggerPlayOnFirstGesture);
        });
      };

      ['click', 'touchstart', 'pointerdown', 'keydown'].forEach(evt => {
        document.addEventListener(evt, triggerPlayOnFirstGesture, { once: true, passive: true });
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderPeopleGrid();

  // Bật/tắt âm thanh bằng nút điều khiển
  const btnMusic = document.getElementById('btn-music');
  if (btnMusic) {
    btnMusic.addEventListener('click', (e) => {
      e.stopPropagation();
      sound.toggleMusic();
    });
  }

  // Nút BASS BOOST siêu trầm phong cách Vũ trường / Quán Bar
  const btnBass = document.getElementById('btn-bass');
  if (btnBass) {
    btnBass.addEventListener('click', (e) => {
      e.stopPropagation();
      sound.toggleBassBoost();
    });
  }

  // Bộ chọn bài nhạc DJ BAR
  const djChips = document.querySelectorAll('.dj-chip');
  djChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      djChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const trackSrc = chip.getAttribute('data-track');
      const trackName = chip.getAttribute('data-name');
      sound.switchTrack(trackSrc, trackName);
    });
  });

  // Tự động phát nhạc Happy Birthday Remix khi mở trang
  startAutoplay();
});
