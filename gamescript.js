const scriptsetvalue = {
    'act': {
        'act0': {
            'display': 'block',
            'pre': ['醬A有心動的妹仔', '但他很迷茫', '不知道自己要幹甚麼'],
            'button': {
                'A': {
                    'text': '醬A決定認真行動',
                    'next': 'act1',
                    'foc': true,
                    'hidden': ['act2', 'act3', 'act4', 'act5', 'act6', 'end1', 'end2', 'end3']
                },
                'B': {
                    'text': '醬A決定甚麼都不幹',
                    'next': 'end1',
                    'foc': false,
                    'hidden': ['act1', 'act2', 'act3', 'act4', 'act5', 'act6', 'end2', 'end3']
                }
            }
        },
        'act1': {
            'display': 'none',
            'pre': ['但總總複雜的因素讓醬A猶豫不前', '醬A不知道該怎麼做', '於是他'],
            'button': {
                'A': {
                    'text': '嘗試跟妹仔調情',
                    'next': 'act2',
                    'foc': true,
                    'hidden': ['act3', 'act4', 'act5', 'act6', 'end1', 'end2', 'end3']
                },
                'B': {
                    'text': '決定在旁邊觀望',
                    'next': 'end1',
                    'foc': false,
                    'hidden': ['act2', 'act3', 'act4', 'act5', 'act6', 'end2', 'end3']
                }
            }
        },
        'act2': {
            'display': 'none',
            'pre': ['但妹仔對於醬A的挑逗'],
            'button': {
                'A': {
                    'text': '熱切的回應',
                    'next': 'act3',
                    'foc': true,
                    'hidden': ['act4', 'act5', 'act6', 'end1', 'end2', 'end3']
                },
                'B': {
                    'text': '因為醬A味太重不接受',
                    'next': 'end1',
                    'foc': false,
                    'hidden': ['act3', 'act4', 'act5', 'act6', 'end2', 'end3']
                }
            }
        },
        'act3': {
            'display': 'none',
            'pre': ['醬A爽到不行', '而這份爽感讓他'],
            'button': {
                'A': {
                    'text': '有了繼續下去的動力',
                    'next': 'act4',
                    'foc': true,
                    'hidden': ['act5', 'act6', 'end1', 'end2', 'end3']
                },
                'B': {
                    'text': '心滿意足 停止行動',
                    'next': 'end2',
                    'foc': false,
                    'hidden': ['act4', 'act5', 'act6', 'end1', 'end3']
                }
            }
        },
        'act4': {
            'display': 'none',
            'pre': [' 醬A直搗黃龍', '使出自己所有的技巧', '跟妹仔纏綿'],
            'button': {
                'A': {
                    'text': '最帥的男人總是做得恰到好處',
                    'next': 'act5',
                    'foc': true,
                    'hidden': ['act6', 'end1', 'end2', 'end3']
                },
                'B': {
                    'text': '但醬A拿捏不了尺度',
                    'next': 'end2',
                    'foc': false,
                    'hidden': ['act5', 'act6', 'end1', 'end3']
                }
            }
        },
        'act5': {
            'display': 'none',
            'pre': ['最終在聖誕夜來臨前'],
            'button': {
                'A': {
                    'text': '醬A提出了邀約',
                    'next': 'act6',
                    'foc': true,
                    'hidden': ['end1', 'end2', 'end3']
                },
                'B': {
                    'text': '醬A沒有提出邀約',
                    'next': 'end2',
                    'hidden': ['act6', 'end1', 'end3']
                }
            }
        },
        'act6': {
            'display': 'none',
            'pre': ['聖誕夜到了', ' 兩人吃美食 逛耶誕城', '寒冷的晚風中兩人心是火熱的', '就這樣持續到了分開的時候'],
            'button': {
                'A': {
                    'text': '不要走 今晚留下來',
                    'next': 'end3',
                    'foc': false,
                    'hidden': ['end1', 'end2']
                },
                'B': {
                    'text': '醬A心滿意足的回家',
                    'next': 'end1',
                    'foc': false,
                    'hidden': ['end2', 'end3']
                }
            }
        }
    },
    'end': {
        'end1': {
            'type': 'bad',
            'display': 'none',
            'pre': ['聖誕夜當天，醬A孤單寂寞覺得冷'],
            'button': {
                'good': {
                    'text': '雖然只是遊戲，但可不是鬧著玩的，醬A該動作了吧',
                    'next': 'act0',
                    'hidden': ['act1', 'act2', 'act3', 'act4', 'act5', 'act6', 'end1', 'end2', 'end3']
                }
            }
        },
        'end2': {
            'type': 'bad',
            'display': 'none',
            'pre': ['聖誕夜當天，醬A失落的回家'],
            'button': {
                'good': {
                    'text': '雖然只是遊戲，但可不是鬧著玩的，醬A該動作了吧',
                    'next': 'act0',
                    'hidden': ['act1', 'act2', 'act3', 'act4', 'act5', 'act6', 'end1', 'end2', 'end3']
                }
            }
        },
        'end3': {
            'type': 'good',
            'display': 'none',
            'pre': ['在神聖的夜晚，醬A跟妹仔二人幸終'],
            'text': 'Perfect Communication',
            'hidden': ['end1', 'end2']
        }
    }
};
