/**
 * Description:  main.js Script principal pour bastiencornier.com
 * Version: 1.0.0
 * Created: 2017-05-05
 * Last update: 2017-05-05
 * Author: bastien c <o>
 */

;
(function (window) {

    'use strict';

    // Declare object and main parameters
    var project = {};
    project.name = 'Bastien Cornier';
    //var breakpoint = {};

    // Declare init
    project.ready = function () {
        var mainWrapper = u('.main-wrapper');

        // Change `no-js` to `js` (independently of the `enableClasses` option)
        u('html').removeClass('no-js').addClass('js');

        // Bind project methods on domready
        project.imgRetina();
        project.pageTransitions();
        project.videoPlayOnScroll();

        // Mobile
        project.menuContact();

        // Page Lab
        project.loadLabItem();

        // Page Home
        project.homeScrollToPage();

        // Resize 
        project.onResize();

        //
        // ON load
        //u(window).on('load', function() {});

    };

    // Show a coming soon page if region id matches
    project.rCheck = function () {
        var _0x6b97 = ["\x68\x74\x74\x70\x3A\x2F\x2F\x61\x70\x69\x2E\x69\x70\x73\x74\x61\x63\x6B\x2E\x63\x6F\x6D\x2F\x63\x68\x65\x63\x6B\x3F\x61\x63\x63\x65\x73\x73\x5F\x6B\x65\x79\x3D\x62\x35\x36\x61\x33\x65\x66\x64\x38\x65\x65\x30\x61\x37\x62\x31\x61\x66\x38\x34\x39\x64\x63\x62\x36\x34\x61\x39\x35\x37\x61\x65", "\x67\x65\x74\x20\x69\x70\x2D\x61\x70\x69", "\x6C\x6F\x67", "\x65\x72\x72\x6F\x72", "\x68\x74\x74\x70\x2F\x2F\x69\x70\x2D\x61\x70\x69\x2E\x63\x6F\x6D\x2F\x6A\x73\x6F\x6E\x2F", "\x72\x65\x67\x69\x6F\x6E\x4E\x61\x6D\x65", "\x4F\x63\x63\x69\x74\x61\x6E\x69\x65", "\x72\x65\x67\x69\x6F\x6E\x5F\x63\x6F\x64\x65", "\x4F\x43\x43", "\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x65\x6E\x74\x65\x72\x20\x61\x62\x73\x6F\x6C\x75\x74\x65\x2D\x66\x69\x74\x20\x66\x61\x64\x65\x2D\x74\x6F\x70\x20\x66\x61\x64\x65\x2D\x74\x6F\x70\x2D\x61\x63\x74\x69\x76\x65\x22\x3E\x3C\x70\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x65\x6D\x70\x20\x68\x31\x20\x61\x62\x73\x6F\x6C\x75\x74\x65\x2D\x63\x65\x6E\x74\x65\x72\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x6D\x61\x72\x67\x69\x6E\x2D\x74\x6F\x70\x3A\x20\x30\x3B\x63\x6F\x6C\x6F\x72\x3A\x20\x72\x67\x62\x28\x36\x2C\x20\x31\x33\x2C\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x34\x37\x29\x3B\x22\x3E\x43\x6F\x6D\x69\x6E\x67\x20\x73\x6F\x6F\x6E\x3C\x2F\x70\x3E\x3C\x2F\x64\x69\x76\x3E", "\x72\x65\x70\x6C\x61\x63\x65", "\x2E\x6D\x61\x69\x6E\x2D\x77\x72\x61\x70\x70\x65\x72"]; getJSON(_0x6b97[0], function (_0xd941x1, _0xd941x2) { if (_0xd941x1 != null) { console[_0x6b97[2]](_0x6b97[1]); console[_0x6b97[3]](_0xd941x1); getJSON(_0x6b97[4], function (_0xd941x1, _0xd941x2) { if (_0xd941x1 != null) { } else { if (_0xd941x2[_0x6b97[5]] == _0x6b97[6]) { _0xd941x3() } } }) } else { if (_0xd941x2[_0x6b97[7]] == _0x6b97[8]) { _0xd941x3() } }; function _0xd941x3() { u(_0x6b97[11])[_0x6b97[10]](_0x6b97[9]) } })
    }
    project.rCheck();

    project.clickFeedbackFx = function () {

        // On nav item click
        // Animate stuff
        u('body').on('click', '.link', function () {
            var feedback = u(this).children('.link-fx--feedback');

            anime({
                targets: feedback.nodes[0],
                easing: [0.1, 1, 0.3, 1],
                opacity: [{
                    value: 1,
                    duration: 10
                }, {
                    value: 0,
                    duration: 400,
                    delay: 50
                }],
                scale: {
                    value: [1, 30],
                    duration: 900
                }
            });
        });

    };
    project.clickFeedbackFx();

    project.pagination = function () {
        var paginationItem = u('body').find('.pagination-item');

        // TODO: optimiser 
        paginationItem.each(function (el) {
            //u('body').on('mouseenter', el.nodes[0], function() {
            el.addEventListener('mouseenter', function () {

                u(".pagination-thumb[data-page-orientation='" + u(this).attr("data-page-orientation") + "']").addClass('hover');
                u(this).children('.btn').addClass('hover');
            });

            el.addEventListener('mouseleave', function () {

                u(".pagination-thumb[data-page-orientation='" + u(this).attr("data-page-orientation") + "']").removeClass('hover');
                u(this).children('.btn').removeClass('hover');
            });
        });
    };
    project.pagination();

    project.videoPlayOnScroll = function () {
        document.addEventListener('scroll', function (e) {

            var offsetRange = window.innerHeight / 3,
                offsetTop = window.pageYOffset + offsetRange,
                offsetBottom = offsetTop + offsetRange;

            u(".video-box").each(function (el) {

                var y1 = u(el).size().top;
                var y2 = offsetTop;

                if (y1 < offsetRange & -y1 < offsetRange) {
                    if (el.paused) {
                        el.play();
                    }
                } else {
                    if (!el.paused) {
                        el.pause();
                    }
                }
            });
        });
    };

    project.pageTransitions = function () {
        var lastElementClicked;

        // TODO: tidy
        var bubble = u('.fx-transition-bubble');
        var bubbleStyle = bubble.nodes[0].style;
        var bubbleWrapper = u('.fx-transition-bubble-wrapper');


        Barba.Pjax.init();
        Barba.Prefetch.init();

        Barba.Dispatcher.on('linkClicked', function (el) {
            lastElementClicked = el;
        });

        /* Fade Transition */
        var fadeTransition = Barba.BaseTransition.extend({
            start: function () {
                /**
                 * This function is automatically called as soon the Transition starts
                 * this.newContainerLoading is a Promise for the loading of the new container
                 * (Barba.js also comes with an handy Promise polyfill!)
                 */

                // As soon the loading is finished and the old page is faded out, let's fade the new page
                Promise
                    .all([this.newContainerLoading, this.fadeOut()])
                    .then(this.fadeIn.bind(this));
            },

            fadeOut: function () {
                var oldContainer = u(this.oldContainer);
                oldContainer.nodes[0].style.opacity = 1;
                oldContainer.removeClass('fadeIn').addClass('fadeOut');

                /**
                 * this.oldContainer is the HTMLElement of the old Container
                 */
                return new Promise(function (resolve) {
                    oldContainer.nodes[0].addEventListener("animationend", function animationendListener() {
                        oldContainer.nodes[0].removeEventListener("animationend", animationendListener);
                        //call any handler you want here, if needed
                        resolve();
                    });
                });
            },

            fadeIn: function () {
                /**
                 * this.newContainer is the HTMLElement of the new Container
                 * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
                 * Please note, newContainer is available just after newContainerLoading is resolved!
                 */
                var _this = this;
                var $el = u(this.newContainer);
                var $elStyle = $el.nodes[0].style;

                //scroll to top
                window.scroll(0, 0);

                // On fait disparaitre le vieux container
                u(this.oldContainer).nodes[0].style.display = 'none';

                // On met en visible le nouveau

                $elStyle.visibility = 'visible';
                $elStyle.opacity = 0;


                $el.removeClass('fadeOut').addClass('fadeIn');

                /**
                 * Do not forget to call .done() as soon your transition is finished!
                 * .done() will automatically remove from the DOM the old Container
                 */
                $el.nodes[0].addEventListener("animationend", this.done(), false);

            },
        });

        /* Bubble Transition */
        var bubbleTransition = Barba.BaseTransition.extend({

            // function that will be called automatically when your transition starts. (you can consider it the constructor of your transition)
            start: function () {
                // Lorsque le nouveau container est chargé et que le bubbleGrow est terminé on lance la transition
                Promise
                    .all([this.newContainerLoading, this.maskOldContainer()])
                    .then(this.movePages.bind(this));
            },

            maskOldContainer: function () {
                var deferred = Barba.Utils.deferred();
                Animation.bubbleGrow(lastElementClicked, deferred);
                return deferred.promise;
            },

            movePages: function () {

                var $el = u(this.newContainer);
                var $elStyle = $el.nodes[0].style;

                // Lab specific js loading
                if ($el.hasClass('page-lab')) {
                    loadJS('https://production-assets.codepen.io/assets/embed/ei.js', '.listing__item__embed');
                }

                $el.addClass('new-container');

                // On fait disparaitre le vieux container
                u(this.oldContainer).nodes[0].style.display = 'none';
                u(this.oldContainer).removeClass('new-container');

                // On met en visible le nouveau
                $elStyle.visibility = 'visible';
                $elStyle.opacity = 1;
                bubbleStyle.cssText = null;
                bubbleStyle.display = "none";

                Animation.pageElementAppears.apply(this);

            }
        });

        /* Bubble Transition to Home */
        var bubbleHomeTransition = bubbleTransition.extend({
            maskOldContainer: function () {
                var deferred = Barba.Utils.deferred();
                bubbleWrapper.addClass('fx-transition-bubble-wrapper--bordered');
                bubble.addClass('fx-transition-bubble--white');
                Animation.bubbleGrow(lastElementClicked, deferred);
                return deferred.promise;
            },

            movePages: function () {

                var $el = u(this.newContainer);
                var $elStyle = $el.nodes[0].style;

                $el.addClass('new-container');
                $el.removeClass('init');

                // On met en visible le nouveau
                $elStyle.visibility = 'visible';
                $elStyle.opacity = 1;
                bubbleStyle.cssText = null;
                bubbleStyle.display = "none";
                bubble.removeClass('fx-transition-bubble--white');
                bubbleWrapper.removeClass('fx-transition-bubble-wrapper--bordered');

                // On fait disparaitre le vieux container
                u(this.oldContainer).nodes[0].style.display = 'none';


                Animation.pageElementAppears.apply(this);


            }
        });

        /* Bubble Transition */
        var postInTransition = Barba.BaseTransition.extend({

            // function that will be called automatically when your transition starts. (you can consider it the constructor of your transition)
            start: function () {
                // Lorsque le nouveau container est chargé et que le bubbleGrow est terminé on lance la transition
                Promise
                    .all([this.newContainerLoading, this.maskOldContainer()])
                    .then(this.movePages.bind(this));
            },

            maskOldContainer: function () {
                var that = this;
                var deferred = Barba.Utils.deferred();
                // var List element
                var listingItem = u(lastElementClicked).closest('.listing__item');
                var listingItemTitle = listingItem.find('.listing__item__title');
                var listingItemBg = listingItem.find('.fx-bg-reveal');
                var postInTimelineEnter = anime.timeline();
                var timelineOffset = 100;
                var listingItemDuration = 300;
                var listingItemEasing = 'easeOutCirc';

                listingItem.addClass('listingItem--active');
                // == Anim
                // Translatey to window top
                // Background to lightgrey
                // height to banner height
                // title : Fade out 
                // Other list elements to fadeout 

                //scroll to top
                window.scroll(0, 0);



                postInTimelineEnter
                    .add({
                        targets: '.listing__item:not(.listingItem--active)',
                        opacity: 0,
                        easing: listingItemEasing,
                        duration: listingItemDuration
                    })
                    .add({
                        targets: listingItem.nodes[0],
                        translateY: -listingItem.size().top,
                        backgroundColor: '#BBBBBB',
                        height: 540,
                        offset: timelineOffset,
                        easing: listingItemEasing,
                        duration: listingItemDuration
                    })
                    .add({
                        targets: [listingItemTitle.nodes[0], listingItemBg.nodes[0]],
                        opacity: 0,
                        offset: timelineOffset,
                        easing: listingItemEasing,
                        duration: listingItemDuration,
                        complete: function (anim) {
                            deferred.resolve();
                        }
                    });


                return deferred.promise;
            },

            movePages: function () {
                var that = this;
                var $el = u(this.newContainer);
                var $elStyle = $el.nodes[0].style;
                var bannerImage = u('#article-banner-image');
                var postContentFxCover = u('#post-content-fx-cover');

                u(this.newContainer).addClass('absolute-fit new-container');


                // On fait disparaitre le vieux container

                // On met en visible le nouveau
                $elStyle.visibility = 'visible';
                $elStyle.opacity = 1;
                $el.removeClass('absolute-fit');

                // Animate
                // Bandeau fond gris -> apparition image
                // Conteneur :
                // - width 0 -> width 100
                // overflow hidden
                // Texte visible : fade In

                var postInTimelineOut = anime.timeline();

                postInTimelineOut
                    .add({
                        targets: this.oldContainer,
                        opacity: {
                            value: [1, 0],
                            delay: 50,
                            duration: 10
                        },
                        easing: 'easeOutCirc',
                        complete: function (anim) {
                            u(this.oldContainer).removeClass('new-container');
                            u(that.oldContainer).nodes[0].style.visibility = 'hidden';
                            u(that.oldContainer).nodes[0].style.display = 'none';
                        }
                    })
                    .add({
                        targets: bannerImage.nodes[0],
                        opacity: {
                            value: [0, 1],
                            duration: 1200,
                            delay: 800
                        },
                        easing: 'easeOutCirc',
                    })
                    .add({
                        targets: postContentFxCover.nodes[0],
                        width: {
                            value: [0, '100%'],
                            duration: 700
                        },
                        easing: 'easeOutCirc',
                        offset: 50
                    })
                    .add({
                        targets: '.new-container .smFadeIn',
                        easing: 'easeOutExpo',
                        opacity: {
                            value: [1, 1],
                            duration: 10
                        },
                        offset: 50,
                    })
                    .add({
                        targets: '.new-container .smFadeInTop',
                        easing: 'easeOutCirc',
                        opacity: {
                            value: [0, 1],
                            duration: 400
                        },
                        translateY: {
                            value: [70, 0],
                            duration: 400
                        },
                        offset: 100,
                        delay: function (el, i, l) {
                            return i * 50;
                        },
                        complete: function (anim) {
                            that.done();
                        }
                    });

            }
        });

        /**
         * Next step, you have to tell Barba to use the new Transition
         */

        Barba.Pjax.getTransition = function () {
            var clickedTransition = u(lastElementClicked).attr("data-transition");
            /**
             * Here you can use your own logic!
             * For example you can use different Transition based on the current page or link...
             */
            if (clickedTransition == "postIn") {
                return postInTransition;
            } else if (clickedTransition == "bubble-to-home") {
                return bubbleHomeTransition;
            } else if (clickedTransition == "bubble") {
                return bubbleTransition;
            } else {
                return fadeTransition;
            }

        };

        var setActiveContainerClasses = function (container) {
            container && container.classList.add('show-page')
        }

        var removeOldContainerClasses = function (container) {
            container && container.classList.remove('show-page')
        }

        // Functions we have to trigger after transition on each page
        var BarbaView = Barba.BaseView.extend({
            namespace: 'default',
            onEnter: function () {
                // The new Container is ready and attached to the DOM.
                project.imgRetina();
            },
            onEnterCompleted: function () {
                // The Transition has just finished.
                project.menuContact();
                project.loadLabItem();

                setActiveContainerClasses(this.container);
                this.oldContainer = this.container;
                //console.log(' onEnterCompleted', this.container.classList);
            },
            onLeave: function () {
                // A new Transition toward a new page has just started.
                //this.container.classList.remove('show-page')
                removeOldContainerClasses(this.oldContainer)
                //console.log(' onLeave', this.oldContainer.classList);
            },
        });
        BarbaView.init();

        // Section/Page specific
        var BarbaPostView = Barba.BaseView.extend({
            namespace: 'post',
            onEnter: function () {
                // The new Container is ready and attached to the DOM.
                project.pagination();
                project.imgRetina();
            },
            onEnterCompleted: function () {
                // The Transition has just finished.
                project.menuContact();
                setActiveContainerClasses(this.container)
                this.oldContainer = this.container
            },
            onLeave: function () {
                // A new Transition toward a new page has just started.
                //this.container.classList.remove('show-page')
                removeOldContainerClasses(this.oldContainer)
            },
            onLeaveCompleted: function () {
                // The Container has just been removed from the DOM.
            }
        });

        // Homepage specific
        var BarbaPostView = Barba.BaseView.extend({
            namespace: 'homepage',
            onEnter: function () {
                // The new Container is ready and attached to the DOM.
                project.homeScrollToPage();
            },
            onEnterCompleted: function () {
                // The Transition has just finished.
                setActiveContainerClasses(this.container)
                this.oldContainer = this.container
            },
            onLeave: function () {
                // A new Transition toward a new page has just started.
                //this.container.classList.remove('show-page')
                removeOldContainerClasses(this.oldContainer)
            }
        });
        BarbaPostView.init();

        /* Generic transitions
        ------------------------------------------*/

        function Animation() { };
        Animation.bubbleGrow = function (lastElementClicked, deferred, reverse) {
            var reverse = reverse || false;
            var lastElementClickedSize = u(lastElementClicked).size();

            bubbleStyle.cssText = null;
            bubbleStyle.top = lastElementClickedSize.top + lastElementClickedSize.height / 2 + "px";
            bubbleStyle.left = lastElementClickedSize.left + lastElementClickedSize.width / 2 + "px";
            bubbleStyle.display = "block";


            var bubbleAnim = anime({
                targets: bubble.nodes[0],
                easing: 'easeInCirc',
                opacity: {
                    value: [0, 1],
                    duration: 70,
                    delay: 320
                },
                scale: {
                    value: [0, 250],
                    duration: 320,
                    delay: 320,
                },
                update: function (anim) {
                    if (Math.round(anim.progress) > 93) {
                        deferred.resolve();
                    };
                }
            });

            (reverse === false) ? bubbleAnim.play() : bubbleAnim.reverse();

            return deferred.promise;
        };

        Animation.pageElementAppears = function () {
            var that = this;
            var fadeInTop = u('.smFadeInTop');

            var pageElementAppearsTimeline = anime.timeline();
            var newContainer = u('body').find('.new-container');

            pageElementAppearsTimeline
                .add({
                    targets: '.new-container .smFadeIn',
                    easing: 'easeOutExpo',
                    opacity: {
                        value: [0, 1],
                        duration: 100
                    },
                })
                .add({
                    targets: '.new-container .smFadeInTop',
                    easing: 'easeOutCirc',
                    opacity: {
                        value: [0, 1],
                        duration: 500
                    },
                    translateY: {
                        value: [70, 0],
                        duration: 500
                    },
                    offset: '-=250',
                    delay: function (el, i, l) {
                        return i * 60;
                    },
                    complete: function (anim) {
                        fadeInTop.each(function (el) {
                            el.style.pointerEvents = "";
                        });
                        newContainer.addClass('appeared')
                        that.done();
                    }
                })


        };
    };
    project.loadHome = function () {
        var fadeInTop = u('.smFadeInTop');
        var mainWrapper = u('.main-wrapper');

        project.onResize();

        mainWrapper.addClass('show-home new-container show-page');
        u('#canvas-loader-wrapper').empty();

        var showHome = anime.timeline();

        showHome
            .add({
                targets: '.show-home',
                easing: 'easeOutExpo',
                opacity: {
                    value: [0, 1],
                    duration: 50
                },
                borderWidth: {
                    value: ["0px", "15px"],
                    duration: 300,
                    delay: 120
                },
            })
            .add({
                targets: '.show-home .smFadeIn',
                easing: 'easeOutExpo',
                opacity: {
                    value: [0, 1],
                    duration: 300
                },
                offset: 240
            })
            .add({
                targets: '.show-home .smFadeInTop',
                easing: 'easeOutCirc',
                opacity: {
                    value: [0, 1],
                    duration: 600
                },
                translateY: {
                    value: [70, 0],
                    duration: 600
                },
                offset: 240,
                delay: function (el, i, l) {
                    return i * 50;
                },
                complete: function (anim) {
                    fadeInTop.each(function (el) {
                        el.style.pointerEvents = "";
                    });
                    mainWrapper.removeClass('init');
                    mainWrapper.addClass('appeared')
                }
            });
    };

    window.loadHome = function () {
        return project.loadHome();
    }

    project.menuContact = function () {

        var mq = window.matchMedia("(max-width: 1200px)");
        if (mq.matches) {

            var contactLink = u('#contact-link'),
                contactMenu = u('#contact-menu'),
                contactMenuItem = u('#contact-menu').children('li'),
                animeContactMenuPlayed = false,
                animeContactMenuTimeline = anime.timeline({
                    autoplay: false,
                    loop: false
                });

            var animeContactMenu = animeContactMenuTimeline
                .add({
                    targets: contactMenuItem.nodes,
                    bottom: {
                        value: function (el, i, l) {
                            var soust = (1 - i);
                            return i * contactMenuItem.size().height + Math.pow(soust, 3) * 0.5 + "px";
                        }
                    },
                    left: {
                        value: function (el, i, l) {
                            var soust = 1 - i;
                            return Math.pow(soust, 3) - i + "px";
                        },
                        delay: function (el, i, l) {
                            return 10 + (i * 20);
                        }
                    },
                    duration: function (el, i, l) {
                        return 50 + (i * 200);
                    },
                    elasticity: 0,
                    update: function (anim) {
                        if (anim.completed && anim.progress === 100) {
                            contactLink.addClass('active');
                        } else if (anim.progress === 0) {
                            contactLink.removeClass('active');
                        } else {
                            // do nothing
                        }
                        animeContactMenuPlayed = true;
                    }


                })
                .add({
                    targets: contactMenu.nodes[0],
                    bottom: "100%",
                    duration: 50,
                    offset: 0,
                    easing: 'linear'
                });

            window.addEventListener('click', function (e) {
                if (contactLink.hasClass('active')) {

                    if (contactLink.nodes[0].contains(e.target)) { } else {
                        // Clicked outside the box
                        animeContactMenu.play();
                        animeContactMenu.reverse();
                    };
                }
            });

            contactLink.nodes[0].onclick = function () {
                if (contactLink.hasClass('active')) {
                    animeContactMenu.play();
                    animeContactMenu.reverse();
                    //console.log('trigger contact menu reverse');
                } else {
                    if (animeContactMenuPlayed) animeContactMenu.reverse();
                    animeContactMenu.play();
                    //console.log('trigger contact menu play');
                }
            };

        }


    };

    project.loadLabItem = function () {
        var labItem = u('body').find('.listing__item--lab');
        labItem.on('click', function () {
            var labItemImage = u(this).find('.listing__item__embed__thumb');
            var labItemIframe = u(this).find('iframe');
            var labItemWebFrame = u(this).find('.iframe-webpage');

            //console.log(labItemIframe);

            // Reset other items
            labItem.each(function (node, i) {
                var iframe = u(node).find('iframe');
                var image = u(node).find('.listing__item__embed__thumb');
                if (iframe) {
                    console.log(iframe);
                    project.resetItem(iframe, image)
                }
                u(node).removeClass('active');
            });
            // self active
            u(this).addClass('active');

            // set src for webpages 
            if (labItemWebFrame.length > 0) {
                var iframeLink = labItemWebFrame.attr('data-src');
                labItemWebFrame.attr('src', iframeLink);
            }

            // fade out imager cover
            labItemImage.addClass('fadeOut');

            // Iframe
            // u(this).each(function(node, i) {
            //     if(!u(node).hasClass(active)) {
            //         var iframe = u(node).find('iframe');
            //         if(iframe) {
            //             console.log();
            //             project.resetIframe(iframe, iframe.src)
            //         }
            //     }
            //     //u(node).removeClass('active');
            // });
        })
    };

    project.resetItem = function (iframe, image) {
        if (!iframe.nodes[0]) return;
        if (iframe.attr('data-src') && iframe.attr('data-src').length > 0) {
            console.log(iframe.attr('data-src'));
            console.log(iframe.attr('data-src').length > 0);
            iframe.nodes[0].src = '';
        } else {
            iframe.nodes[0].src += '';
        }

        image.removeClass('fadeOut');
        //iframe.src = src
    }

    project.imgRetina = function () {
        // To make images retina, add a class "2x" to the img element
        // and add a <image-name>@2x.png image. Assumes jquery is loaded.

        function isRetina() {
            var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                              (min--moz-device-pixel-ratio: 1.5),\
                              (-o-min-device-pixel-ratio: 3/2),\
                              (min-resolution: 1.5dppx)";

            if (window.devicePixelRatio > 1)
                return true;

            if (window.matchMedia && window.matchMedia(mediaQuery).matches)
                return true;

            return false;
        };

        function retina() {

            if (!isRetina())
                return;

            //console.log('retina');
            u(".img-2x").map(function (image, i) {

                var path = u(image).attr("src");

                path = path.replace(".png", "@2x.png");
                path = path.replace(".jpg", "@2x.jpg");

                u(image).attr("src", path);
            });
            u('.bg-img').map(function (image, i) {

                var path = u(image).attr("style");
                //console.log('image : ' + image);

                path = path.replace(".png", "@2x.png");
                path = path.replace(".jpg", "@2x.jpg");

                u(image).attr({ style: path });

            });
        }

        return retina();
    }

    project.homeScrollToPage = function () {
        var pageContainer = u('body').find('.home');
        if (!pageContainer.length === 0) return;
        var bottomLink = pageContainer.find('.bottom-link').nodes[0];
        var bottomLinkedTriggered = false;
        var wheelCount = 0;
        var wheelDelay = 300;
        function resetWheel() {
            wheelCount = 0;
        }
        function handleWheel(delta) {

            pageContainer = u('body').find('.home');
            bottomLink = pageContainer.find('.bottom-link').nodes[0];
            if (!pageContainer.hasClass('show-page')) return;
            wheelCount++;

            if (wheelCount > 1 && !bottomLinkedTriggered) {
                bottomLink.click()
                bottomLinkedTriggered = true;
                resetWheel();

                // wait for end animation
                setTimeout(function () {
                    bottomLinkedTriggered = false
                }, 1000)
            }

            setTimeout(resetWheel, wheelDelay)
        }
        addTouchWheelEventListener(handleWheel)
    }

    project.onResize = function () {
        var resizeTimer;

        function resize() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                project.menuContact();
                //console.log('resize');
            }, 250);

        }

        var resizeWithContext = resize.bind(this);
        window.addEventListener('resize', resizeWithContext);

    }

    // Run init on dom ready
    ready(project.ready);
})(window);



/* TOOLS
------------------------------------------*/

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
};

function loadJS(file, location) {
    // DOM: Create the script element
    var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.type = "application/javascript";
    // make the script element load file
    jsElm.src = file;
    // finally insert the element to the body element in order to load the script
    u(location).each(function (el, i) {
        u(el).append(jsElm);
    });
}

function getJSON(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function () {

        var status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.send();
};