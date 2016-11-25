class CursorParallax{
  constructor(wrapper , options) 
  {
    this.hage='getgetegteett';
    this.isStop = true;

    this.options = this.supplement({
      easing: 'ease-out',
      duration: '.6s',
      mousemoveRatio: 0.5,
      deviceorientationRatio: 1,
      mousemove: true,
      deviceorientation: true
    }, options);

    this.initElements(wrapper);

    this.setEvents();

    this.start();
  }
  initElements (wrapper)
  {
    this.elm_wrapper = typeof wrapper === 'string' ? document.querySelector(wrapper) : wrapper;
    this.elm_layers = this.elm_wrapper.querySelectorAll('.layer');
    this.elm_wrapper.style.position = 'relative';
    this.elm_wrapper.style.backfaceVisibility = 'hidden';
    this.elm_wrapper.style.transform = 'translate3d(0px, 0px, 0px)';
    this.elm_wrapper.style.transformStyle = 'preserve-3d';
    this.elm_layers.forEach((elm_layer) => {
      elm_layer.style.position = 'absolute';
      elm_layer.style.top = 0;
      elm_layer.style.left = 0;
      elm_layer.style.width = '100%';
      elm_layer.style.height = '100%';
      elm_layer.style.transition = 'transform 0.6s ease-out';
      elm_layer.style.transitionProperty = 'transform';
      elm_layer.style.transitionDuration = this.options.duration;
      elm_layer.style.transitionTimingFunction = this.options.easing;
      elm_layer._depth = parseFloat( elm_layer.getAttribute('data-depth') );
    });

    let rect = this.elm_wrapper.getBoundingClientRect();
    this.elm_wrapper._offset = {};
    this.elm_wrapper._offset.top = rect.top + window.pageYOffset;
    this.elm_wrapper._offset.left = rect.left + window.pageXOffset;
    this.elm_wrapper._offset.width = this.elm_wrapper.offsetWidth;
    this.elm_wrapper._offset.height = this.elm_wrapper.offsetHeight;
  }
  setEvents ()
  {
    if (this.options.mousemove)
    {
      this.elm_wrapper.addEventListener('mousemove', this.mousemove.bind(this));
    }
    if (this.options.deviceorientation)
    {
      window.addEventListener('deviceorientation', this.deviceorientation.bind(this));
    }
  }
  removeEvents ()
  {
    this.elm_wrapper.removeEventListener('mousemove', this.mousemove);
    window.removeEventListener('deviceorientation', this.deviceorientation);
  }
  moveLayer (x, y) 
  {
    if(this.isStop) return;
    this.elm_layers.forEach((elm_layer) => {
      let _x = x * elm_layer._depth;
      let _y = y * elm_layer._depth;
      elm_layer.style.transform = 'translate3d('+ _x +'%, '+ _y +'%, 0)';
    });
  }
  mousemove (e) 
  {
    let my = e.pageY - this.elm_wrapper._offset.top;
    let mx = e.pageX - this.elm_wrapper._offset.left;
    let x = Math.round(mx / this.elm_wrapper._offset.width * 100) - 50;
    let y = Math.round(my / this.elm_wrapper._offset.height * 100) - 50;
    x = x * this.options.mousemoveRatio;
    y = y * this.options.mousemoveRatio;
    this.moveLayer(x, y);
  }
  deviceorientation (e)
  {
    let x = ( Math.round(e.gamma) / 2 + 45 ) / 90 * 100 - 50;
    let y = ( Math.round(e.beta) / 2 + 45 ) / 90 * 100 - 50;
    x = x * this.options.deviceorientationRatio;
    y = y * this.options.deviceorientationRatio;
    this.moveLayer(x, y);
  }
  supplement (defaultOptions, options)
  {
    let _options = {};
    Object.keys(defaultOptions).forEach((key) => {
      _options[key] = options[key] === undefined ? defaultOptions[key] : options[key];
    });
    return _options;
  }
  stop ()
  {
    this.isStop = true;
  }
  start ()
  {
    this.isStop = false;
  }
  destroy () {
    removeEvents();
  }
}
window.CursorParallax = CursorParallax;