'use strict';

/* =========================================================
   PIXEL LOG — dependency-free blog, router & motion system
   ========================================================= */

const TAGS = {
  code:     { name: '代码实验', en: 'CODE LAB', icon: '</>', color: '#b9f56a' },
  design:   { name: '设计思考', en: 'DESIGN', icon: '✦', color: '#c0a1ff' },
  game:     { name: '游戏漫游', en: 'GAME ON', icon: '▣', color: '#ff9e64' },
  life:     { name: '生活碎片', en: 'LIFE BITS', icon: '♣', color: '#7dd8e8' },
  tutorial: { name: '上手教程', en: 'TUTORIAL', icon: '▤', color: '#f49ab7' },
  essay:    { name: '随笔杂谈', en: 'ESSAYS', icon: '☾', color: '#e6d779' }
};

const articles = [
  {
    slug: 'build-a-cozy-pixel-world', title: '用 CSS 搭建一个会呼吸的像素世界',
    excerpt: '不需要复杂的 WebGL，也不用庞大的游戏引擎。只用盒阴影、渐变和一点想象力，让一方小小的像素营地动起来。',
    date: '2026.11.08', readTime: 8, tag: 'code', tags: ['code', 'tutorial'], art: 'terminal', issue: '001',
    coverBg: '#1a3027', coverAccent: '#b9f56a', label: 'CREATIVE CODING',
    intro: '像素画的魅力，在于它用极少的元素传递足够丰富的信息。这篇文章记录我如何仅用 CSS 搭建首页那片小小的营地。',
    sections: [
      { heading: '从有限的调色板开始', body: `<p>像素风并不意味着随便把图片变模糊。它是一套关于<strong>限制与取舍</strong>的视觉语言：有限的色彩、清晰的边缘，以及刻意保留的锯齿。</p><p>我先为营地选定了五种颜色：深夜蓝、远山绿、地面青、篝火橙和月光黄。限制调色板能让画面迅速统一，也让每一个高亮都更有意义。</p><blockquote><p>好的像素艺术不是画得更多，而是让每一个方块都恰到好处。</p></blockquote>` },
      { heading: '把盒阴影变成画笔', body: `<p>一个元素只有一对伪元素，但 <code>box-shadow</code> 可以拥有任意多个投影。给投影去掉模糊，再设定固定偏移，一颗像素就变成了整幅画。</p><pre><code><span class="code-comment">/* 一颗 8px 的像素星星 */</span>
<span class="code-keyword">.star</span> {
  <span class="code-function">width</span>: 8px;
  <span class="code-function">height</span>: 8px;
  <span class="code-function">background</span>: #d8f6a4;
  <span class="code-function">box-shadow</span>:
    8px 0 #d8f6a4,
    -8px 0 #d8f6a4,
    0 8px #d8f6a4,
    0 -8px #d8f6a4;
}</code></pre><p>如果图案再复杂一些，我会先在网格纸上画出来，再把坐标逐行翻译成阴影。过程有点像绣花，很慢，但很治愈。</p>` },
      { heading: '让画面轻轻呼吸', body: `<p>动画不需要幅度很大。星光在两个亮度之间切换，火焰只缩放几个百分点，人物每秒钟上下移动两像素，就足以让世界活过来。</p><ul><li>使用 <code>steps()</code> 保留逐帧动画的颗粒感；</li><li>让不同元素拥有不同周期，避免机械地同步；</li><li>只动画 <code>transform</code> 和 <code>opacity</code>，减少重绘。</li></ul><p>最后别忘了 <code>prefers-reduced-motion</code>。不是每个人都喜欢移动的页面，尊重系统设置和实现动画本身同样重要。</p>` },
      { heading: '留一点不完美', body: `<p>像素的趣味恰恰来自它的不完美。不要执着于平滑，不必消除所有锯齿。给想象留一些空隙，看的人自然会补完那些没有画出的部分。</p>` }
    ]
  },
  {
    slug: 'pixel-art-design-language', title: '像素风不只是怀旧：一种克制的设计语言',
    excerpt: '从红白机到现代独立游戏，像素艺术为何总能穿越周期？聊聊网格、限制，以及少即是多的视觉表达。',
    date: '2026.11.02', readTime: 6, tag: 'design', tags: ['design', 'essay'], art: 'css', issue: '002',
    coverBg: '#292239', coverAccent: '#c0a1ff', label: 'VISUAL DESIGN',
    intro: '我们很容易把像素风归类为复古滤镜，但真正让它持久的，不是某段集体记忆，而是它对信息的高度压缩。',
    sections: [
      { heading: '限制不是敌人', body: `<p>早期游戏受硬件限制，只能使用有限的分辨率和颜色。创作者不得不用最少的方块表现角色、情绪和空间。今天，这些限制已经消失，但它留下的方法仍然有效。</p><p><strong>当资源有限时，选择才会变得清晰。</strong>一个 16 × 16 的头像里，两颗像素的位置就可能决定角色是开心还是疑惑。</p>` },
      { heading: '建立清晰的视觉层级', body: `<p>像素界面里，边框、阴影和留白都比微妙渐变更重要。实色块会自然地形成层级，而硬边阴影能在不增加复杂材质的情况下提供深度。</p><ol><li>先确保轮廓能够辨认，再添加内部细节；</li><li>用明度区分前后关系，而不只用色相；</li><li>让交互状态有明确变化，例如位移一格或反色。</li></ol>` },
      { heading: '复古与现代可以共存', body: `<p>现代像素设计不需要模拟低分辨率带来的所有不便。正文依然应该清晰易读，点击区域依然应该足够大，对比度也必须满足无障碍要求。</p><p>把像素留给插画、图标、装饰和反馈，把舒适的阅读体验留给正文。怀旧是表情，不该成为使用的负担。</p>` }
    ]
  },
  {
    slug: 'small-games-big-worlds', title: '小游戏，大世界：独立游戏教会我的事',
    excerpt: '没有惊人的预算，也不追求无限开放世界。那些小小的独立游戏，如何用独特的规则留下长久的感动？',
    date: '2026.10.26', readTime: 7, tag: 'game', tags: ['game', 'essay'], art: 'game', issue: '003',
    coverBg: '#36271f', coverAccent: '#ff9e64', label: 'INDIE GAMES',
    intro: '我喜欢的游戏大多不大。十几个小时的旅程、一套独特的机制、几位鲜活的角色，足矣。',
    sections: [
      { heading: '一个机制，一种表达', body: `<p>优秀的独立游戏往往从一个非常简单的想法开始：时间可以倒流、角色不能跳跃、语言需要破译。机制不只是玩法，也是作者讲述主题的方式。</p><p>当操作和叙事指向同一个方向，玩家不需要读过场文字，也能理解作品想说的话。</p>` },
      { heading: '空白也是世界的一部分', body: `<p>大地图不必然带来大世界。真正让世界显得广阔的，是细节之间留出的想象空间：一扇打不开的门、一段没有说完的对话、远处永远无法抵达的山。</p><blockquote><p>探索的意义，有时不是找到答案，而是发现问题。</p></blockquote>` },
      { heading: '完成比宏大更重要', body: `<p>对创作者来说，独立游戏最有启发的一点，是它们清楚自己的边界。删掉不能服务核心的系统，把有限的时间留给最重要的体验。</p><p>这也是我做个人项目时不断提醒自己的话：<strong>先做一个小而完整的世界，再考虑下一片大陆。</strong></p>` }
    ]
  },
  {
    slug: 'digital-garden-notes', title: '把博客当作数字花园，而不是内容工厂',
    excerpt: '文章不必一发表就完美。像照料植物一样，给想法阳光、时间，以及偶尔修剪枝叶的耐心。',
    date: '2026.10.18', readTime: 5, tag: 'life', tags: ['life', 'essay'], art: 'life', issue: '004',
    coverBg: '#193238', coverAccent: '#7dd8e8', label: 'SLOW LIVING',
    intro: '我曾经把写作当成一次次发布：设定截止日期，完成，推送，然后不再回头。后来我开始把这里想象成一座花园。',
    sections: [
      { heading: '从种子而不是书架开始', body: `<p>不是所有笔记都值得写成长文，但很多好文章都始于一句不完整的想法。我现在会先保存问题、片段和矛盾，让它们在笔记里待一段时间。</p><p>当两个原本无关的片段产生联系，一颗种子就开始发芽了。</p>` },
      { heading: '允许文章继续生长', body: `<p>数字花园里的页面没有绝对的完成状态。读到新的资料，就补充一个段落；发现旧的判断不再成立，就坦然修改。</p><p>这种写作方式降低了开始的压力。我不必一次给出最终答案，只需要诚实地记录目前的理解。</p>` },
      { heading: '为自己保留一块慢空间', body: `<p>不追逐热点，不计算每一分钟的产出，也不让统计数字决定下一篇文章。博客首先是我的思考空间，其次才是公开出版物。</p><p>偶尔有人经过，从某篇文章里找到有用的东西，那便是额外的惊喜。</p>` }
    ]
  },
  {
    slug: 'markdown-blog-workflow', title: '从零搭建你的 Markdown 写作工作流',
    excerpt: '文件夹、纯文本与几个简单约定，就能组成稳定而自由的写作系统。这份指南适合想长期写下去的你。',
    date: '2026.10.09', readTime: 10, tag: 'tutorial', tags: ['tutorial', 'code'], art: 'book', issue: '005',
    coverBg: '#38232d', coverAccent: '#f49ab7', label: 'WORKFLOW',
    intro: '工具不应该成为写作的门槛。一套好的工作流，应当让你把注意力放在想法上，同时让内容能够被长期保存和迁移。',
    sections: [
      { heading: '为什么是纯文本', body: `<p>Markdown 最大的优势不是语法简单，而是它不依赖某一家平台。十年后，你仍然可以用任何文本编辑器打开今天的文章。</p><p>建议按年份组织文件，并使用日期和语义化名称命名：</p><pre><code>content/
└── 2026/
    ├── 01-hello-world.md
    ├── 02-css-pixels.md
    └── 03-digital-garden.md</code></pre>` },
      { heading: '用 Front Matter 描述文章', body: `<p>在文章开头保存标题、日期、标签和摘要。元数据足够简单，静态网站生成器就能帮你完成列表、归档和订阅源。</p><pre><code>---
title: <span class="code-string">"我的第一篇文章"</span>
date: <span class="code-string">"2026-11-12"</span>
tags: [writing, blog]
draft: <span class="code-keyword">false</span>
---</code></pre>` },
      { heading: '让发布成为最后一步', body: `<p>我的流程只有四步：随手记录、整理草稿、大声朗读、提交发布。朗读尤其重要，它能迅速发现拗口的句子和断裂的逻辑。</p><ul><li>先完成，再完善；</li><li>把排版留给模板，不在正文里调整样式；</li><li>定期备份整个文件夹，而不只是导出文章。</li></ul>` }
    ]
  },
  {
    slug: 'night-walk-and-ideas', title: '夜间散步时，我在想些什么',
    excerpt: '离开屏幕以后，许多打结的想法反而慢慢松开。关于散步、注意力，以及给大脑留一点空闲。',
    date: '2026.09.28', readTime: 4, tag: 'essay', tags: ['essay', 'life'], art: 'night', issue: '006',
    coverBg: '#302e24', coverAccent: '#e6d779', label: 'AFTER HOURS',
    intro: '有些问题无法靠更努力地盯着屏幕解决。于是我在晚饭后出门，不带播客，也不给自己设定目的地。',
    sections: [
      { heading: '注意力离开以后', body: `<p>散步时，视线不再固定在某个矩形里。树叶、路灯和远处的声音轮流占据注意力，大脑终于有机会处理那些被搁置的想法。</p><p>很多代码里的问题，并不是在键盘前解决的，而是在某个路口突然有了新的答案。</p>` },
      { heading: '不必记录每一个灵感', body: `<p>我曾经急着把每个想法都存进手机，好像不记下来就是损失。现在我只记住真正反复出现的那些。</p><p>想法也需要筛选。能被遗忘的，或许本来就没那么重要。</p>` },
      { heading: '留一点无聊', body: `<p>我们习惯了用信息填满每一段空白，却很少意识到，无聊是大脑整理自己的时刻。不必把每次散步都变成效率工具。</p><p>有时候，走一圈就只是走一圈。这已经足够。</p>` }
    ]
  },
  {
    slug: 'keyboard-ergonomics', title: '我的桌面减法：一把顺手的键盘就够了',
    excerpt: '不追求装备清单，只讨论那些真正改善日常体验的小选择：布局、键程、坐姿和适合自己的工具。',
    date: '2026.09.15', readTime: 6, tag: 'life', tags: ['life', 'design'], art: 'keyboard', issue: '007',
    coverBg: '#203038', coverAccent: '#7dd8e8', label: 'DESK SETUP',
    intro: '桌面设备很容易变成一种收藏。折腾过几轮以后，我留下的东西越来越少，但每一样都更清楚自己为什么存在。',
    sections: [
      { heading: '适合比参数重要', body: `<p>键盘没有统一的最优解。手的大小、输入习惯和桌面空间，都会影响选择。与其追逐热门型号，不如先回答：我每天最常做什么？</p><p>对我这样的写作者和开发者来说，紧凑布局和舒适键程，比绚丽灯效更重要。</p>` },
      { heading: '身体是最好的反馈', body: `<p>再昂贵的设备也不能抵消不合适的姿势。手腕自然放松，屏幕与视线平齐，定时起身活动，这些普通建议往往最有效。</p><blockquote><p>工具应该适应人，而不是让人去适应工具。</p></blockquote>` },
      { heading: '给桌面留一点空白', body: `<p>空白不代表缺少设备，而是给双手和注意力留下空间。现在我的桌面只保留键盘、鼠标、一盏灯和正在读的书。</p><p>东西少了以后，每一次坐下都更容易进入状态。</p>` }
    ]
  },
  {
    slug: 'personal-project-finish-line', title: '如何完成一个个人项目，而不只是开始',
    excerpt: '灵感让项目开始，边界让它抵达终点。一份给独立创作者的实用清单，聊聊范围、节奏与发布。',
    date: '2026.09.02', readTime: 9, tag: 'code', tags: ['code', 'design'], art: 'compass', issue: '008',
    coverBg: '#263421', coverAccent: '#b9f56a', label: 'SIDE PROJECT',
    intro: '开始一个个人项目很快乐：新仓库、新技术、无限可能。真正困难的是两周以后，新鲜感退去，待办事项却越来越多。',
    sections: [
      { heading: '先写下“不做什么”', body: `<p>项目范围不是一张功能愿望清单，而是一条边界。我会先写一句核心目标，再列出这个版本明确不做的功能。</p><p>例如这个博客的第一版不需要评论、后台和数据库，只需要让人舒适地读完一篇文章。</p>` },
      { heading: '把终点拆小', body: `<p>“完成博客”不是一个可执行任务，“点击文章标题能打开详情页”才是。任务越具体，越容易在碎片时间里推进。</p><ol><li>先打通最短的一条使用路径；</li><li>每次只添加一个真正改善体验的功能；</li><li>保留简单版本，避免实验破坏可用状态。</li></ol>` },
      { heading: '发布也是项目的一部分', body: `<p>不要等到所有细节完美才发布。真实使用会告诉你，哪些问题值得优先解决，哪些精巧设计其实没有人在意。</p><p>个人项目不必永远维护，也不需要证明什么。<strong>完成一个阶段，诚实记录，然后允许自己开始新的冒险。</strong></p>` }
    ]
  }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const homeView = $('#home-view');
const postView = $('#post-view');
const grid = $('#article-grid');
const searchInput = $('#article-search');
const reducedMotionQuery = matchMedia('(prefers-reduced-motion: reduce)');
const lightThemeQuery = matchMedia('(prefers-color-scheme: light)');
const finePointerQuery = matchMedia('(pointer: fine)');
let activeTag = 'all';
let currentPost = null;
let toastTimer;
let motionEnabled = !reducedMotionQuery.matches;
let revealObserver;

function readStorage(key) {
  try { return localStorage.getItem(key); } catch (_) { return null; }
}
function writeStorage(key, value) {
  try { localStorage.setItem(key, value); } catch (_) { /* Storage can be unavailable in private contexts. */ }
}
function pad(number) { return String(number).padStart(2, '0'); }
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ---------- Theme ---------- */
function setTheme(theme, persist = false) {
  document.documentElement.dataset.theme = theme;
  const isLight = theme === 'light';
  $('#theme-toggle').setAttribute('aria-label', `切换为${isLight ? '深色' : '浅色'}主题`);
  $('.theme-label').textContent = isLight ? 'DARK' : 'LIGHT';
  $('meta[name="theme-color"]').content = isLight ? '#f4f2e9' : '#0d1310';
  if (persist) writeStorage('pixel-log-theme', theme);
}
setTheme(document.documentElement.dataset.theme || 'dark');
$('#theme-toggle').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next, true);
  showToast(`已切换到${next === 'light' ? '浅色' : '深色'}模式`);
});
lightThemeQuery.addEventListener('change', event => {
  if (!readStorage('pixel-log-theme')) setTheme(event.matches ? 'light' : 'dark');
});

/* ---------- Article cards, filtering & tags ---------- */
function coverMarkup(post, isHero = false) {
  return `<div class="article-cover" style="--cover-bg:${post.coverBg};--cover-accent:${post.coverAccent}" aria-hidden="true">
    <span class="cover-label">${post.label}</span>
    <div class="cover-art art-${post.art}"><i></i><b></b></div>
    <span class="cover-number">${post.issue}</span>
    ${isHero ? '<div class="world-scanlines"></div>' : ''}
  </div>`;
}

function cardMarkup(post) {
  const tag = TAGS[post.tag];
  return `<article class="article-card" style="--cover-accent:${post.coverAccent}">
    <a class="card-link" href="#/post/${post.slug}" aria-label="阅读：${post.title}"></a>
    ${coverMarkup(post)}
    <div class="card-body">
      <div class="card-meta"><span class="card-tag"># ${tag.name}</span><i></i><time>${post.date}</time></div>
      <h3>${post.title}</h3>
      <p class="card-excerpt">${post.excerpt}</p>
      <div class="card-footer"><span>${pad(post.readTime)} MIN READ</span><span class="read-more">阅读全文 <span>↗</span></span></div>
    </div>
  </article>`;
}

function renderFilters() {
  const filters = [['all', { name: '全部', en: 'ALL' }], ...Object.entries(TAGS)];
  $('#filter-tabs').innerHTML = filters.map(([key, tag]) => {
    const count = key === 'all' ? articles.length : articles.filter(post => post.tags.includes(key)).length;
    return `<button class="filter-tab ${activeTag === key ? 'active' : ''}" type="button" data-filter="${key}" aria-pressed="${activeTag === key}">${tag.name}<span>${pad(count)}</span></button>`;
  }).join('');
}

function renderArticles() {
  const query = searchInput.value.trim().toLocaleLowerCase('zh-CN');
  const filtered = articles.filter(post => {
    const inTag = activeTag === 'all' || post.tags.includes(activeTag);
    const haystack = `${post.title} ${post.excerpt} ${post.tags.map(tag => TAGS[tag].name).join(' ')}`.toLocaleLowerCase('zh-CN');
    return inTag && (!query || haystack.includes(query));
  });
  grid.innerHTML = filtered.map(cardMarkup).join('');
  $('#empty-state').hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
  $('#results-count').textContent = `SHOWING ${pad(filtered.length)} / ${pad(articles.length)} POSTS`;
  $('#active-filter').textContent = activeTag === 'all' ? (query ? `SEARCH: “${searchInput.value.trim()}”` : 'ALL POSTS') : `# ${TAGS[activeTag].name}`;
  renderFilters();
  observeReveals(grid);
}

function selectTag(tag, shouldScroll = false) {
  activeTag = TAGS[tag] ? tag : 'all';
  renderArticles();
  if (shouldScroll) {
    if (location.hash.startsWith('#/post/')) location.hash = '#articles';
    else $('#articles').scrollIntoView({ behavior: motionEnabled ? 'smooth' : 'auto' });
  }
}

function renderTagCloud() {
  $('#tag-cloud').innerHTML = Object.entries(TAGS).map(([key, tag]) => {
    const count = articles.filter(post => post.tags.includes(key)).length;
    return `<button class="topic-tag" type="button" data-tag="${key}" style="--tag-color:${tag.color}" aria-label="查看${tag.name}标签下的 ${count} 篇文章">
      <span class="tag-icon" aria-hidden="true">${tag.icon}</span>
      <span><strong>${tag.name}</strong><small>${tag.en}</small></span>
      <span class="tag-total">${pad(count)}</span><span class="tag-arrow" aria-hidden="true">→</span>
    </button>`;
  }).join('');
}

$('#filter-tabs').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (button) selectTag(button.dataset.filter);
});
$('#tag-cloud').addEventListener('click', event => {
  const button = event.target.closest('[data-tag]');
  if (button) selectTag(button.dataset.tag, true);
});
searchInput.addEventListener('input', renderArticles);
$('#clear-filters').addEventListener('click', () => {
  activeTag = 'all';
  searchInput.value = '';
  renderArticles();
  searchInput.focus();
});
document.addEventListener('keydown', event => {
  const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
  if (event.key === '/' && !typing && !homeView.hidden) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.value = '';
    renderArticles();
    searchInput.blur();
  }
});

/* ---------- Article detail & hash router ---------- */
function postMarkup(post) {
  const index = articles.indexOf(post);
  const previous = articles[index - 1];
  const next = articles[index + 1];
  const tag = TAGS[post.tag];
  return `<a class="post-back" href="#articles">← 返回文章列表</a>
    <header class="post-header" style="--post-color:${post.coverAccent}">
      <span class="post-label"><span aria-hidden="true">✦</span> ${tag.en} / NO.${post.issue}</span>
      <h1 class="glitch" data-text="${post.title}" aria-label="${post.title}">${post.title}</h1>
      <p class="post-deck">${post.excerpt}</p>
      <div class="post-byline"><span>PIXEL TRAVELER</span><i></i><time>${post.date}</time><i></i><span>${post.readTime} MIN READ</span></div>
    </header>
    <div class="post-hero-art">${coverMarkup(post, true)}</div>
    <div class="post-layout">
      <aside class="post-aside" aria-label="文章目录"><span>ON THIS PAGE</span><ol class="post-toc">${post.sections.map((section, i) => `<li><a href="#section-${i + 1}">${section.heading}</a></li>`).join('')}</ol><div class="post-progress"><i></i></div><small id="progress-label">0% READ</small></aside>
      <div class="post-content" style="--post-color:${post.coverAccent}">
        <p class="typewriter-line"><span id="post-typewriter" data-text="${post.intro}">${post.intro}</span><i class="type-cursor" aria-hidden="true"></i></p>
        ${post.sections.map((section, i) => `<section><h2 id="section-${i + 1}">${section.heading}</h2>${section.body}</section>`).join('')}
        <div class="post-end">END OF TRANSMISSION</div>
        <div class="post-tags">${post.tags.map(key => `<button type="button" data-post-tag="${key}"># ${TAGS[key].name}</button>`).join('')}</div>
        <nav class="post-navigation" aria-label="相邻文章">
          ${previous ? `<a class="post-nav-card" href="#/post/${previous.slug}"><small>← 较新一篇</small><strong>${previous.title}</strong></a>` : '<span></span>'}
          ${next ? `<a class="post-nav-card next" href="#/post/${next.slug}"><small>较早一篇 →</small><strong>${next.title}</strong></a>` : ''}
        </nav>
      </div>
    </div>`;
}

function openPost(slug) {
  const post = articles.find(item => item.slug === slug);
  homeView.hidden = true;
  postView.hidden = false;
  currentPost = post || null;
  if (!post) {
    postView.innerHTML = `<div class="not-found"><span>404</span><h1>这片像素还没有被探索</h1><p>你寻找的文章不存在，或者已经移动到了别的坐标。</p><a class="button button-primary" href="#articles">返回文章列表 ↗</a></div>`;
    document.title = '404 · 像素日志';
  } else {
    postView.innerHTML = postMarkup(post);
    document.title = `${post.title} · 像素日志`;
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  updateActiveNav();
  if (post) typePostIntro(post.intro);
}

function showHome() {
  const anchor = location.hash.slice(1);
  const wasPost = !postView.hidden;
  postView.hidden = true;
  homeView.hidden = false;
  currentPost = null;
  document.title = '像素日志 · PIXEL LOG';
  if (wasPost && !['articles', 'tags', 'about'].includes(anchor)) window.scrollTo({ top: 0, behavior: 'instant' });
  if (['articles', 'tags', 'about'].includes(anchor)) {
    requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ behavior: wasPost ? 'instant' : (motionEnabled ? 'smooth' : 'auto') }));
  }
  updateActiveNav();
}

function handleRoute() {
  closeMenu();
  if (location.hash.startsWith('#/post/')) openPost(decodeURIComponent(location.hash.slice(7)));
  else showHome();
}
window.addEventListener('hashchange', handleRoute);
postView.addEventListener('click', event => {
  const tocLink = event.target.closest('a[href^="#section-"]');
  if (tocLink) {
    event.preventDefault();
    document.getElementById(tocLink.getAttribute('href').slice(1))?.scrollIntoView({ behavior: motionEnabled ? 'smooth' : 'auto', block: 'start' });
    return;
  }
  const tagButton = event.target.closest('[data-post-tag]');
  if (tagButton) selectTag(tagButton.dataset.postTag, true);
});

function updateActiveNav() {
  $$('[data-nav]').forEach(link => link.classList.remove('active'));
  if (currentPost || ['#articles', '#/post/'].some(prefix => location.hash.startsWith(prefix))) {
    $('[data-nav="articles"]')?.classList.add('active');
  } else if (location.hash === '#tags') {
    $('[data-nav="tags"]')?.classList.add('active');
  } else if (location.hash === '#about') {
    $('[data-nav="about"]')?.classList.add('active');
  } else {
    $('[data-nav="home"]')?.classList.add('active');
  }
}

/* ---------- Mobile navigation ---------- */
const menuButton = $('#menu-toggle');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '打开菜单');
  $('#mobile-nav').hidden = true;
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
  $('#mobile-nav').hidden = !open;
});
$('#mobile-nav').addEventListener('click', closeMenu);

/* ---------- Typewriter effects ---------- */
const typewriterPhrases = ['保持好奇，继续探索。', 'Hello, world! 很高兴见到你。', '每一行代码，都是新的冒险。'];
let typewriterGeneration = 0;
function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
async function runTypewriter() {
  const generation = ++typewriterGeneration;
  const element = $('#typewriter-text');
  let phraseIndex = 0;
  if (!motionEnabled) { element.textContent = typewriterPhrases[0]; return; }
  while (motionEnabled && generation === typewriterGeneration) {
    const phrase = typewriterPhrases[phraseIndex];
    for (let i = 1; i <= phrase.length; i++) {
      if (!motionEnabled || generation !== typewriterGeneration) return;
      element.textContent = phrase.slice(0, i);
      await wait(/[，。！]/.test(phrase[i - 1]) ? 180 : 75);
    }
    await wait(2100);
    for (let i = phrase.length; i >= 0; i--) {
      if (!motionEnabled || generation !== typewriterGeneration) return;
      element.textContent = phrase.slice(0, i);
      await wait(32);
    }
    await wait(350);
    phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
  }
}
let postTypeGeneration = 0;
async function typePostIntro(text) {
  const generation = ++postTypeGeneration;
  const element = $('#post-typewriter');
  if (!element) return;
  if (!motionEnabled) { element.textContent = text; return; }
  element.textContent = '';
  await wait(350);
  for (let i = 1; i <= text.length; i++) {
    if (!motionEnabled || generation !== postTypeGeneration || !element.isConnected) return;
    element.textContent = text.slice(0, i);
    await wait(24);
  }
}

/* ---------- Pixel mouse particles ---------- */
const canvas = $('#particle-canvas');
const context = canvas.getContext('2d');
let particles = [];
let particleFrame = 0;
let lastPointer = { x: 0, y: 0, time: 0 };
function resizeCanvas() {
  const ratio = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.round(innerWidth * ratio);
  canvas.height = Math.round(innerHeight * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
}
function addParticles(x, y, count = 2, burst = false) {
  if (!motionEnabled || !finePointerQuery.matches) return;
  const styles = getComputedStyle(document.documentElement);
  const palette = [styles.getPropertyValue('--accent').trim(), styles.getPropertyValue('--blue').trim(), styles.getPropertyValue('--purple').trim()];
  for (let i = 0; i < count && particles.length < 90; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = burst ? 1 + Math.random() * 2.8 : .25 + Math.random() * .65;
    particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - .2, life: 1, decay: .018 + Math.random() * .018, size: burst ? 3 + Math.random() * 3 : 2 + Math.random() * 3, color: palette[Math.floor(Math.random() * palette.length)] });
  }
  if (!particleFrame) particleFrame = requestAnimationFrame(drawParticles);
}
function drawParticles() {
  context.clearRect(0, 0, innerWidth, innerHeight);
  particles = particles.filter(particle => particle.life > 0);
  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += .025;
    particle.life -= particle.decay;
    context.globalAlpha = Math.max(0, particle.life);
    context.fillStyle = particle.color;
    const size = Math.max(1, Math.round(particle.size * particle.life));
    context.fillRect(Math.round(particle.x), Math.round(particle.y), size, size);
  }
  context.globalAlpha = 1;
  if (particles.length && motionEnabled) particleFrame = requestAnimationFrame(drawParticles);
  else particleFrame = 0;
}
function clearParticles() {
  cancelAnimationFrame(particleFrame);
  particleFrame = 0;
  particles = [];
  context.clearRect(0, 0, innerWidth, innerHeight);
}
window.addEventListener('pointermove', event => {
  if (!motionEnabled || event.pointerType === 'touch' || document.hidden) return;
  const now = performance.now();
  const distance = Math.hypot(event.clientX - lastPointer.x, event.clientY - lastPointer.y);
  if (now - lastPointer.time > 26 && distance > 5) {
    addParticles(event.clientX, event.clientY, distance > 35 ? 3 : 1);
    lastPointer = { x: event.clientX, y: event.clientY, time: now };
  }
}, { passive: true });
window.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'touch') addParticles(event.clientX, event.clientY, 12, true);
}, { passive: true });
window.addEventListener('resize', resizeCanvas, { passive: true });
resizeCanvas();

/* ---------- Pointer & scroll parallax, reading progress ---------- */
const rootStyle = document.documentElement.style;
let scrollTicking = false;
function updateScrollEffects() {
  scrollTicking = false;
  const y = window.scrollY;
  rootStyle.setProperty('--scroll', motionEnabled && y < innerHeight * 1.4 ? y : 0);
  const progress = $('#post-view .post-progress');
  if (progress && currentPost) {
    const content = $('.post-content', postView);
    const start = content.offsetTop - innerHeight * .25;
    const total = content.offsetHeight - innerHeight * .55;
    const value = Math.max(0, Math.min(100, ((y - start) / Math.max(total, 1)) * 100));
    progress.style.setProperty('--progress', `${value}%`);
    $('#progress-label').textContent = `${Math.round(value)}% READ`;
    const headings = $$('.post-content h2', postView);
    let activeIndex = 0;
    headings.forEach((heading, index) => { if (heading.getBoundingClientRect().top < 180) activeIndex = index; });
    $$('.post-toc a', postView).forEach((link, index) => link.classList.toggle('active', index === activeIndex));
  }
}
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    scrollTicking = true;
    requestAnimationFrame(updateScrollEffects);
  }
}, { passive: true });
window.addEventListener('pointermove', event => {
  if (!motionEnabled || event.pointerType === 'touch') return;
  const visual = $('#hero-visual');
  if (!visual || homeView.hidden || window.scrollY > innerHeight) return;
  const bounds = visual.getBoundingClientRect();
  const x = Math.max(-1, Math.min(1, (event.clientX - (bounds.left + bounds.width / 2)) / bounds.width));
  const y = Math.max(-1, Math.min(1, (event.clientY - (bounds.top + bounds.height / 2)) / bounds.height));
  rootStyle.setProperty('--mx', x.toFixed(3));
  rootStyle.setProperty('--my', y.toFixed(3));
}, { passive: true });

/* ---------- Scroll reveal & occasional glitch ---------- */
function observeReveals(root = document) {
  if (!motionEnabled || !('IntersectionObserver' in window)) return;
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || !motionEnabled) return;
        const siblings = [...entry.target.parentElement.children];
        const delay = Math.min(siblings.indexOf(entry.target) % 3 * 70, 140);
        entry.target.animate([
          { opacity: 0, transform: 'translateY(16px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 430, delay, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' });
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: '0px 0px -25px' });
  }
  $$('.article-card, .topic-tag, .about-section, .newsletter', root).forEach(element => {
    if (!element.dataset.revealBound) {
      element.dataset.revealBound = 'true';
      revealObserver.observe(element);
    }
  });
}
setInterval(() => {
  if (!motionEnabled || document.hidden) return;
  const glitch = $('.hero .glitch');
  if (!glitch || homeView.hidden || scrollY > innerHeight) return;
  glitch.classList.add('is-glitching');
  setTimeout(() => glitch.classList.remove('is-glitching'), 550);
}, 6200);

/* ---------- Central motion preference ---------- */
function applyMotionPreference() {
  const saved = readStorage('pixel-log-motion');
  motionEnabled = !reducedMotionQuery.matches && saved !== 'off';
  document.documentElement.dataset.motion = motionEnabled ? 'on' : 'off';
  const button = $('#motion-toggle');
  button.setAttribute('aria-pressed', String(!motionEnabled));
  button.setAttribute('aria-label', reducedMotionQuery.matches ? '系统已开启减少动态效果' : (motionEnabled ? '关闭动态效果' : '开启动态效果'));
  button.title = reducedMotionQuery.matches ? '跟随系统：减少动态效果' : (motionEnabled ? '关闭动态效果' : '开启动态效果');
  rootStyle.setProperty('--mx', 0);
  rootStyle.setProperty('--my', 0);
  rootStyle.setProperty('--scroll', 0);
  typewriterGeneration++;
  postTypeGeneration++;
  clearParticles();
  if (motionEnabled) {
    runTypewriter();
    observeReveals();
    const intro = $('#post-typewriter');
    if (intro) typePostIntro(intro.dataset.text);
  } else {
    $('#typewriter-text').textContent = typewriterPhrases[0];
    const intro = $('#post-typewriter');
    if (intro) intro.textContent = intro.dataset.text;
    $$('.glitch').forEach(element => element.classList.remove('is-glitching'));
  }
}
$('#motion-toggle').addEventListener('click', () => {
  if (reducedMotionQuery.matches) {
    showToast('正在遵循系统的“减少动态效果”设置');
    return;
  }
  writeStorage('pixel-log-motion', motionEnabled ? 'off' : 'on');
  applyMotionPreference();
  showToast(motionEnabled ? '动态效果已开启' : '动态效果已关闭');
});
reducedMotionQuery.addEventListener('change', applyMotionPreference);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) clearParticles();
});

/* ---------- Small utilities ---------- */
$('#back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: motionEnabled ? 'smooth' : 'auto' }));
$('#subscribe-form').addEventListener('submit', event => {
  event.preventDefault();
  const email = $('#subscribe-email');
  if (!email.checkValidity()) { email.reportValidity(); return; }
  showToast('这是演示表单，邮箱不会被保存或发送。');
  $('#form-note').textContent = '演示站点：订阅服务尚未连接，感谢你的喜欢！';
});

/* ---------- Boot ---------- */
$('#article-count').textContent = pad(articles.length);
$('#tag-count').textContent = pad(Object.keys(TAGS).length);
renderTagCloud();
renderArticles();
handleRoute();
applyMotionPreference();
observeReveals();
