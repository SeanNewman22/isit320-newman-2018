(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        13: function(e, n, t) {},
        15: function(e, n, t) {},
        17: function(e, n, t) {
            'use strict';
            t.r(n);
            var o = t(0),
                a = t.n(o),
                c = t(2),
                r = t.n(c),
                l = (t(13), t(3)),
                i = t(4),
                u = t(6),
                s = t(5),
                p = t(7),
                h = (t(15),
                (function(e) {
                    function n() {
                        var e, t;
                        Object(l.a)(this, n);
                        for (
                            var o = arguments.length, a = new Array(o), c = 0;
                            c < o;
                            c++
                        )
                            a[c] = arguments[c];
                        return (
                            ((t = Object(u.a)(
                                this,
                                (e = Object(s.a)(n)).call.apply(
                                    e,
                                    [this].concat(a)
                                )
                            )).copyFile = function() {
                                fetch('/script-pusher/copy-file')
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(e) {
                                        console.log('parsed json', e);
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, URL bad, network down, or similar',
                                            e
                                        );
                                    });
                            }),
                            t
                        );
                    }
                    return (
                        Object(p.a)(n, e),
                        Object(i.a)(n, [
                            {
                                key: 'render',
                                value: function() {
                                    return a.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        a.a.createElement(
                                            'header',
                                            null,
                                            a.a.createElement(
                                                'h1',
                                                null,
                                                'Copy File'
                                            )
                                        ),
                                        a.a.createElement(
                                            'main',
                                            null,
                                            a.a.createElement(
                                                'button',
                                                { onClick: this.copyFile },
                                                'Copy File'
                                            )
                                        ),
                                        a.a.createElement(
                                            'footer',
                                            null,
                                            a.a.createElement(
                                                'p',
                                                null,
                                                '\xa9 by Sean Newman'
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        n
                    );
                })(o.Component));
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            r.a.render(
                a.a.createElement(h, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        8: function(e, n, t) {
            e.exports = t(17);
        }
    },
    [[8, 2, 1]]
]);
//# sourceMappingURL=main.af7df39b.chunk.js.map
