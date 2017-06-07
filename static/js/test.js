var myArr = []
var obj = {
    'loginKey': '',
    'appid': '',
    'some': '',
    'name': '',
    'style': '',
    'cId': '',
    'developer': '',
    'des': '',
    'icon': '',
    'snapshot': '',
    'derection': '',
    'language': '',
    'isInternal': '',
    'price': '',
    'copyrightFile': '',
    'fileName': '',
    'fileSize': '',
    'package': '',
    'fileMd5': '',
    'versionCode': '',
    'version': '',
    'osVersion': '',
    'file': '',
    'filePath': '',
    'videoImage': '',
    'video': '',
    'vrIcon': ''
}

myArr = [
    {
        'loginKey': '',
        'appid': '',
        'some': '',
        'name': '',
        'style': '',
        'cId': '',
        'developer': '',
        'des': '',
        'icon': '',
        'snapshot': '',
        'derection': '',
        'language': '',
        'isInternal': '',
        'price': '',
        'copyrightFile': '',
        'fileName': '',
        'fileSize': '',
        'package': '',
        'fileMd5': '',
        'versionCode': '',
        'version': '',
        'osVersion': '',
        'file': '',
        'filePath': '',
        'videoImage': '',
        'video': '',
        'vrIcon': ''
    }, {
        'loginKey': '',
        'appid': '',
        'some': '',
        'name': '',
        'style': '',
        'cId': '',
        'developer': '',
        'des': '',
        'icon': '',
        'snapshot': '',
        'derection': '',
        'language': '',
        'isInternal': '',
        'price': '',
        'copyrightFile': '',
        'fileName': '',
        'fileSize': '',
        'package': '',
        'fileMd5': '',
        'versionCode': '',
        'version': '',
        'osVersion': '',
        'file': '',
        'filePath': '',
        'videoImage': '',
        'video': '',
        'vrIcon': ''
    },
]

var batchLog = [];
var counter = 0;
var outLength = myArr.length;
var timmer = setInterval(function () {
    if (counter > outLength) {
        clearInterval(timmer);
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:3000/note/insertLog',
            data: {
                log: batchLog
            }
        }).then(function (resp) {
            console.log(resp.data);
            alert('done!');
        }, function (err) {
            console.log(err);
        })
    } else {
        var formdata = myArr[counter];
        MyServer.appAudit(formdata, function (data) {
            if (data.code == 'SUCCESS') {
                var logObj = {}
                logObj.appId = formdata.appid;
                logObj.state = 'SUCCESS';
                logObj.msg = data.msg;
                batchLog.push(logObj);
            } else {
                var logObj = {}
                logObj.appId = formdata.appid;
                logObj.state = 'Error';
                logObj.msg = data.msg;
                batchLog.push(logObj);
            }
        }, MyServer.error);
    }
    counter += 1;
}, 250);





[
    {
        "游戏英文名称": "0110 Run",
        "游戏名称": "0110跑酷",
        "手机系统": "安卓",
        "应用类型": "游戏",
        "应用分类": "竞速",
        "应用提供方": "Lucid Sight, Inc.",
        "应用描述": "科幻风格的VR跑酷游戏。游戏背景：世界末日到来已经到了，世界已经开始在你身边崩溃，因为一个永恒的野兽吞噬了你身边所有的人，越过障碍，挑战极限。",
        "应用包文件名": "0110Run.apk",
        "应用包文件大小": "110.15",
        "应用包名": "com.lucidsight.Zero110Run",
        "应用版本代码": "4",
        "应用版本名称": "1.2.0",
        "版本更新说明": "版本上线",
        "是否内购": "否",
        "语言": "英语",
        "收费模式": "免费",
        "控制支持": "触控板",
        "路径": "GearVR游戏整理\\0110跑酷"
    },
    {
        "游戏英文名称": "405 Rage",
        "游戏名称": "405路怒",
        "手机系统": "安卓",
        "应用类型": "游戏",
        "应用分类": "竞速",
        "应用提供方": "Lucid Sight, Inc.",
        "应用描述": "游戏设定在美国加利福尼亚州的405号高速公路上，你驾驶着自己的小车，在前行的同时躲避并消灭其它阻碍你的车辆，充满了新奇的想象力和幽默感的一款游戏。",
        "应用包文件名": "405Rage.apk",
        "应用包文件大小": "77.48",
        "应用包名": "com.lucidsight.highwayrage",
        "应用版本代码": "7",
        "应用版本名称": "1.04",
        "版本更新说明": "版本上线",
        "是否内购": "否",
        "语言": "英语",
        "收费模式": "免费",
        "控制支持": "触控板",
        "路径": "GearVR游戏整理\\405路怒"
    },
    {
        "游戏英文名称": "Action Bowling VR",
        "游戏名称": "VR保龄球",
        "手机系统": "安卓",
        "应用类型": "游戏",
        "应用分类": "运动",
        "应用提供方": "Atomic Bullfrog LLC",
        "应用描述": "一款模拟保龄球运动的游戏。有多种场景模式可供选择：正式场馆、矿坑、太空轨道。戴上头盔，身临其境尽情体验保龄球的魅力。",
        "应用包文件名": "ActionBowlingVR.apk",
        "应用包文件大小": "145.77",
        "应用包名": "com.tribalcity.actionbowlingvr",
        "应用版本代码": "102",
        "应用版本名称": "1.0.2",
        "版本更新说明": "版本上线",
        "是否内购": "否",
        "语言": "英语",
        "收费模式": "免费",
        "控制支持": "触控板",
        "路径": "GearVR游戏整理\\VR保龄球"
    },
    {
        "游戏英文名称": "Adventure Time Magic Man",
        "游戏名称": "探险活宝：魔术师",
        "手机系统": "安卓",
        "应用类型": "游戏",
        "应用分类": "动作",
        "应用提供方": "Cartoon Network",
        "应用描述": "如果你看过《探险活宝》，你会知道魔术师是一个大混蛋，总是喜欢使用魔法欺负人。玩家使用Finn的剑和Jake的弹力去战斗，你最终的任务是解除施放在你身上的咒语，然而，作为玩家的你，是一个第三人称的气球!是的，你就是那个被魔术师施了咒语变成气球的Tiny。",
        "应用包文件名": "AdventureTimeMagicMan.apk",
        "应用包文件大小": "257.3",
        "应用包名": "com.turner.atmagicmansheadgames",
        "应用版本代码": "1",
        "应用版本名称": "1.0.2",
        "版本更新说明": "版本上线",
        "是否内购": "否",
        "语言": "英语",
        "收费模式": "免费",
        "控制支持": "蓝牙手柄",
        "路径": "GearVR游戏整理\\探险活宝：魔术师"
    },
    {
        "游戏英文名称": "AFFECTED - The Manor",
        "游戏名称": "庄园惊魂",
        "手机系统": "安卓",
        "应用类型": "游戏",
        "应用分类": "恐怖",
        "应用提供方": "Fallen Planet Studios",
        "应用描述": "给冒险者提供了一个全新沉浸式的恐怖体验阴森的庄园，压抑的音乐、沉重的氛围、前所未有的恐惧，你所要做的就是勇往直前。",
        "应用包文件名": "AFFECTEDTheManor.apk",
        "应用包文件大小": "229.32",
        "应用包名": "com.fallen.affected",
        "应用版本代码": "19",
        "应用版本名称": "1.2",
        "版本更新说明": "版本上线",
        "是否内购": "否",
        "语言": "英语",
        "收费模式": "免费",
        "控制支持": "触控板",
        "路径": "GearVR游戏整理\\庄园惊魂"
    },
    {
        "游戏英文名称": "Air Hockey VR",
        "游戏名称": "VR空气曲棍球",
        "手机系统": "安卓",
        "应用类型": "游戏",
        "应用分类": "休闲",
        "应用提供方": "Trioxin245 Software",
        "应用描述": "一款空气曲棍球模拟类游戏，游戏场景设置在一座现代公寓内，你可以选择3种不同的难度进行游戏，来试试你的水平吧！",
        "应用包文件名": "AirHockeyVR.apk",
        "应用包文件大小": "30.18",
        "应用包名": "com.scarpelli.airhockeyvr",
        "应用版本代码": "7",
        "应用版本名称": "1.7",
        "版本更新说明": "版本上线",
        "是否内购": "否",
        "语言": "英语",
        "收费模式": "免费",
        "控制支持": "触控板",
        "路径": "GearVR游戏整理\\VR空气曲棍球"
    },
    {
        "游戏英文名称": "Angels and Demigods",
        "游戏名称": "天使与神",
        "手机系统": "安卓",
        "应用类型": "游戏",
        "应用分类": "解谜",
        "应用提供方": "7 Keys Studios",
        "应用描述": "和我们一起旅行到遥远的未来，人类通过创造天使来保护上帝。让自己沉浸在一个陌生的世界里，发现为什么你在漫长的睡眠之后醒来。会见朋友和敌人，发现他们的目标，最重要的是尽量保持活着。天使与人是一个大气的科幻视觉小说在VR带给你。这是一个以故事为中心，以对话为中心的游戏，你通过仔细选择你所说的和所做的来创造自己的冒险。",
        "应用包文件名": "AngelsandDemigods.apk",
        "应用包文件大小": "112.92",
        "应用包名": "com.sevenkeystudios.angelsanddemigods",
        "应用版本代码": "2",
        "应用版本名称": "1.1",
        "版本更新说明": "版本上线",
        "是否内购": "否",
        "语言": "英语",
        "收费模式": "免费",
        "控制支持": "触控板",
        "路径": "GearVR游戏整理\\天使与神"
    },
    {
        "游戏英文名称": "Anshar Wars 2",
        "游戏名称": "安莎尔星球大战2",
        "手机系统": "安卓",
        "应用类型": "游戏",
        "应用分类": "射击",
        "应用提供方": "OZWE",
        "应用描述": "《安莎尔星球大战2(Anshar Wars2)》是一款太空竞赛类的VR游戏。使用的是关卡制推进方式，在游戏的主界面你可以在十三个不同的关卡中进行选择。游戏中战斗机飞行需要使用头部来进行控制。你处在机后的第三人称视角，转动头部来移动准星，而战斗机则会向着准心移动。同时你可以用手指在触摸板上进行操作，点击进行开火、向前滑动发射导弹等特殊攻击，而上下滑动来加速减速。",
        "应用包文件名": "AnsharWars2.apk",
        "应用包文件大小": "720.52",
        "应用包名": "com.ozwe.aw2",
        "应用版本代码": "34",
        "应用版本名称": "4.2",
        "版本更新说明": "版本上线",
        "是否内购": "否",
        "语言": "英语",
        "收费模式": "免费",
        "控制支持": "触控板",
        "路径": "GearVR游戏整理\\安莎尔星球大战2"
    },
    {
        "游戏英文名称": "AntarcticOcean",
        "游戏名称": "南极海洋",
        "手机系统": "安卓",
        "应用类型": "游戏",
        "应用分类": "场景",
        "应用提供方": "NetDragon",
        "应用描述": "南极，神秘的南极海洋。少有人类涉足的地方到底潜藏着怎样的秘密呢？硅藻，磷虾，逆戟鲸，鱿鱼和南极鳕鱼，这款应用中，你将探索一个充满生机海底世界。",
        "应用包文件名": "AntarcticOcean.apk",
        "应用包文件大小": "39.89",
        "应用包名": "com.nd.GearVR.AntarcticOcean",
        "应用版本代码": "2",
        "应用版本名称": "1.0 ",
        "版本更新说明": "版本上线",
        "是否内购": "否",
        "语言": "英语",
        "收费模式": "免费",
        "控制支持": "触控板",
        "路径": "GearVR游戏整理\\南极海洋"
    },
    {
        "游戏英文名称": "Apnea",
        "游戏名称": "窒息",
        "手机系统": "安卓",
        "应用类型": "游戏",
        "应用分类": "冒险",
        "应用提供方": "MefistoFiles Ltd.",
        "应用描述": "一款水下潜水探险的游戏，你化身为一名深海潜水员在空气没有用完之前穿过鲨鱼出没的场景，你需要小心谨慎然后加运气才能生存下去哟！",
        "应用包文件名": "Apnea.apk",
        "应用包文件大小": "192.42",
        "应用包名": "com.mefistofiles.apnea",
        "应用版本代码": "15",
        "应用版本名称": "1.0.1",
        "版本更新说明": "版本上线",
        "是否内购": "否",
        "语言": "英语",
        "收费模式": "免费",
        "控制支持": "触控板",
        "路径": "GearVR游戏整理\\窒息"
    }
]