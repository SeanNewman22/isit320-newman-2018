(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        11: function(e, t, a) {
            e.exports = a(19);
        },
        16: function(e, t, a) {},
        19: function(e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                l = a.n(n),
                o = a(9),
                r = a.n(o),
                i = (a(16), a(10)),
                c = a(2),
                s = a(3),
                u = a(5),
                m = a(4),
                d = a(6),
                p = a(1),
                h = (a(8),
                (function(e) {
                    function t() {
                        return (
                            Object(c.a)(this, t),
                            Object(u.a)(
                                this,
                                Object(m.a)(t).apply(this, arguments)
                            )
                        );
                    }
                    return (
                        Object(d.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    return l.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        l.a.createElement(
                                            'header',
                                            null,
                                            l.a.createElement(
                                                'h1',
                                                null,
                                                'System Check'
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component)),
                f = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            Object(c.a)(this, t),
                            ((a = Object(u.a)(
                                this,
                                Object(m.a)(t).call(this, e)
                            )).runSshUptime = function() {
                                var e = Object(p.a)(Object(p.a)(a));
                                fetch('ssh-runner/run-uptime')
                                    .then(function(e) {
                                        return e.json();
                                    })
                                    .then(function(t) {
                                        console.log(
                                            'JSON allData from server:',
                                            t.allData
                                        ),
                                            e.setState({ allData: t.allData });
                                    })
                                    .catch(function(e) {
                                        console.log(
                                            'parsing failed, error on server, URL bad, network down, or similar'
                                        ),
                                            console.log(
                                                JSON.stringify(e, null, 4)
                                            );
                                    });
                            }),
                            (a.runScript = function(e, t) {
                                var n = Object(p.a)(Object(p.a)(a));
                                t &&
                                    fetch(e + t)
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            console.log('allData', e.allData),
                                                console.log('result', e.result),
                                                console.log('code', e.code),
                                                console.log('error', e.error);
                                            var a = '';
                                            if ('error' === e.result)
                                                a = e.error;
                                            else if ('CpuInfo' === t)
                                                for (
                                                    var l = RegExp(
                                                            'model name.*',
                                                            'g'
                                                        ),
                                                        o = l.exec(e.allData);
                                                    null !== o;

                                                )
                                                    (a += o[0] + '\n'),
                                                        console.log(
                                                            'Found '.concat(
                                                                o[0],
                                                                '.'
                                                            )
                                                        ),
                                                        (o = l.exec(e.allData));
                                            else a = e.allData;
                                            n.setState({ allData: a });
                                        })
                                        .catch(function(e) {
                                            console.log(
                                                'parsing failed, URL bad, network down, or similar',
                                                e
                                            );
                                        });
                            }),
                            (a.handleChange = function(e) {
                                var t = e.target.value,
                                    n = e.target.getAttribute('data-endpoint');
                                console.log('HANDLE CHANGE', t),
                                    a.setState(
                                        Object(i.a)({}, a.state, {
                                            selectedValue: t,
                                            endPointIndex: n
                                        })
                                    );
                            }),
                            (a.handleSubmit = function(e) {
                                a.setState({ allData: '' }),
                                    console.log(
                                        'A name was submitted: ',
                                        a.state
                                    ),
                                    'uptime2' === a.state.selectedValue
                                        ? (console.log('Going to ssh'),
                                          a.runSshUptime(),
                                          e.preventDefault())
                                        : (a.runScript(
                                              a.dataEndPoints[
                                                  a.state.endPointIndex
                                              ],
                                              a.state.selectedValue
                                          ),
                                          e.preventDefault());
                            }),
                            (a.dataEndPoints = [
                                '/script-pusher/run-script?script=',
                                '/script-pusher/run-system-tool?script='
                            ]),
                            (a.state = {
                                allData: '',
                                selectedValue: '',
                                endPointIndex: 0
                            }),
                            a
                        );
                    }
                    return (
                        Object(d.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = l.a.createElement(
                                        'div',
                                        { className: 'container' },
                                        l.a.createElement(
                                            'form',
                                            { onSubmit: this.handleSubmit },
                                            l.a.createElement(
                                                'fieldset',
                                                null,
                                                l.a.createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'elf-form-field'
                                                    },
                                                    l.a.createElement(
                                                        'legend',
                                                        null,
                                                        'Services'
                                                    ),
                                                    l.a.createElement('input', {
                                                        type: 'radio',
                                                        name: 'app-choice',
                                                        'data-endpoint': '0',
                                                        value: 'CpuInfo',
                                                        id: 'elf-radio-cpu',
                                                        onChange: this
                                                            .handleChange
                                                    }),
                                                    l.a.createElement(
                                                        'label',
                                                        {
                                                            htmlFor:
                                                                'elf-radio-cpu'
                                                        },
                                                        'CpuInfo'
                                                    ),
                                                    l.a.createElement('input', {
                                                        type: 'radio',
                                                        name: 'app-choice',
                                                        'data-endpoint': '0',
                                                        value: 'VersionCheck',
                                                        id: 'elf-radio-version',
                                                        onChange: this
                                                            .handleChange
                                                    }),
                                                    l.a.createElement(
                                                        'label',
                                                        {
                                                            htmlFor:
                                                                'elf-radio-version'
                                                        },
                                                        'Version Info'
                                                    ),
                                                    l.a.createElement('input', {
                                                        type: 'radio',
                                                        name: 'app-choice',
                                                        'data-endpoint': '1',
                                                        value: 'uptime',
                                                        id: 'elf-radio-uptime',
                                                        onChange: this
                                                            .handleChange
                                                    }),
                                                    l.a.createElement(
                                                        'label',
                                                        {
                                                            htmlFor:
                                                                'elf-radio-uptime'
                                                        },
                                                        'Uptime'
                                                    )
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'form-group' },
                                                    l.a.createElement(
                                                        'button',
                                                        {
                                                            type: 'submit',
                                                            className:
                                                                'btn btn-primary'
                                                        },
                                                        'Run System Script'
                                                    )
                                                )
                                            ),
                                            l.a.createElement(
                                                'fieldset',
                                                null,
                                                l.a.createElement(
                                                    'div',
                                                    {
                                                        className:
                                                            'elf-form-field'
                                                    },
                                                    l.a.createElement(
                                                        'legend',
                                                        null,
                                                        'Remote Services'
                                                    ),
                                                    l.a.createElement('input', {
                                                        type: 'radio',
                                                        name: 'app-choice',
                                                        'data-endpoint': '1',
                                                        value: 'uptime2',
                                                        id: 'elf-radio-uptime2',
                                                        onChange: this
                                                            .handleChange
                                                    }),
                                                    l.a.createElement(
                                                        'label',
                                                        {
                                                            htmlFor:
                                                                'elf-radio-uptime2'
                                                        },
                                                        'Uptime'
                                                    )
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'form-group' },
                                                    l.a.createElement(
                                                        'button',
                                                        {
                                                            type: 'submit',
                                                            className:
                                                                'btn btn-primary'
                                                        },
                                                        'Run System Script'
                                                    )
                                                )
                                            )
                                        )
                                    );
                                    return l.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        l.a.createElement(h, null),
                                        l.a.createElement(
                                            'main',
                                            null,
                                            l.a.createElement(
                                                'section',
                                                null,
                                                e
                                            ),
                                            l.a.createElement(
                                                'section',
                                                null,
                                                l.a.createElement(
                                                    'pre',
                                                    null,
                                                    this.state.allData
                                                )
                                            ),
                                            l.a.createElement(
                                                'button',
                                                { onClick: this.runFoo },
                                                'Run Foo'
                                            )
                                        ),
                                        l.a.createElement(
                                            'footer',
                                            null,
                                            l.a.createElement(
                                                'p',
                                                null,
                                                '\xa9 by Sean Newman'
                                            )
                                        )
                                    );
                                }
                            }
                        ]),
                        t
                    );
                })(n.Component);
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            r.a.render(
                l.a.createElement(f, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
        8: function(e, t, a) {}
    },
    [[11, 2, 1]]
]);
//# sourceMappingURL=main.b6f79a6b.chunk.js.map
