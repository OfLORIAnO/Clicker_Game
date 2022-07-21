

// Получение монет для бета-теста
let get_coins = 0
function getmoney(){
    get_coins = Number(prompt('Введите кол-во монет для старта'));
    coins = coins + get_coins
    balance_current.innerHTML = coins
}

/*                  Из html                                */
let boss_hp_current_output = document.getElementById('boss_hp_curent');
let boss_hp_output = document.getElementById('boss_hp_max');
let boss_hp_line = document.getElementById('boss_hp_line')
let balance_current = document.getElementById('balance');
let monster_lvl = document.getElementById('monster_lvl');
let monster_img = document.getElementById('monster_img')
const monster = document.getElementById('monster');

/*                  Изменение картики                       */
let randPic = Math.round(Math.random()*4+1)
let randPic_temp = randPic
let randPic_path = ''
let randPic_current = ''
    /*              Начальная картинка босса                */
    randPic_path = 'img/b'+String(randPic)+'.png'
    randPic_current = randPic_path
    monster_img.style.backgroundImage = "url('"+randPic_path+"')"
    console.log(randPic_current)

/*                  Монеты                                  */
let coins = 10
let coins_temp = 1.1
let coins_plus = 1
//          Флаги
let flag = 1

/*                  Предметы                                */
let weapon__info_name = document.getElementById('weapon__info_name')
let weapon_damage = document.getElementById('weapon_damage')
let weapon_bronze_sword = {
    name: 'Бронзовый меч',  
    damage_weapon: 1,
    price: 0,
    flag_weapon: 1,
    plus_coins: 1.1,
};
let weapon_steel_sword  = {
    name: 'Стальной меч',  
    damage_weapon: 10,
    price: 100,
    flag_weapon: 0,
    plus_coins: 1.2,
};
let weapon_silver_sword  = {
    name: 'Серебряный меч',  
    damage_weapon: 100,
    price: 1000,
    flag_weapon: 0,
    plus_coins: 1.3,
};
let weapon_magic_staffI  = {
    name: 'Волшебный посох-I',  
    damage_weapon: 500,
    price: 4000,
    flag_weapon: 0,
    plus_coins: 1.4,
};
let weapon_magic_staffII = {
    name: 'Волшебный посох-II',  
    damage_weapon: 5000,
    price: 10000,
    flag_weapon: 0,
    plus_coins: 2,
};
let weapon_fire_sword = {
    name: 'Огненный меч',  
    damage_weapon: 15000,
    price: 25000,
    flag_weapon: 0,
    plus_coins: 3,
};
let weapon_divine_sword  = {
    name: 'Божественный меч',  
    damage_weapon: 50000,
    price: 50000,
    flag_weapon: 0,
    plus_coins: 10,
};
let weapon_dark_sword  = {
    name: 'Тёмный меч',  
    damage_weapon: 100000,
    price: 100000,
    flag_weapon: 0,
    plus_coins: 50,
};
let gods_magical_staffI = {
    name: 'Магичнский посах бога-I',  
    damage_weapon: 1000000,
    price: 750000,
    flag_weapon: 0,
    plus_coins: 100,
};
let weapon_of_the_universe = {
    name: 'Оружие мироздания',  
    damage_weapon: 10000000,
    price: 10000000,
    flag_weapon: 0,
    plus_coins: 1000,
};
/*                  Функции покупки предметов                   */
//

function changeHTML(){
    weapon__info_name.innerHTML = current_weapon.name
    weapon_damage.innerHTML = String(current_weapon.damage_weapon)
    current_weapon.flag_weapon = 1
    balance_current.innerHTML = String(coins)
    monster_img.style.marginLeft = '0px'
    monster_img.style.transform = 'rotate(0deg)'
}

//                  Стальной меч
function buy_weapon_weapon_steel_sword(){
    if(coins >= weapon_steel_sword.price){
        if (weapon_steel_sword.flag_weapon == 0){
            coins = coins -  weapon_steel_sword.price
            current_weapon = weapon_steel_sword
            changeHTML()
            alert('Вы приобрели: ' + current_weapon.name)
        }
        else{
            alert('У вас уже есть этот предмет, либо вы его уже покупали ранее')
        }
    }
    else{
        alert('У вас не хватвает монет:( Заработайте и возвращайтесь!')
    }
}

//                  Серебрянный меч
function buy_weapon_silver_sword(){
    if(coins >= weapon_silver_sword.price){
        if (weapon_silver_sword.flag_weapon == 0){
            coins = coins -  weapon_silver_sword.price
            current_weapon = weapon_silver_sword
            changeHTML()
            alert('Вы приобрели: ' + current_weapon.name)
        }
        else{
            alert('У вас уже есть этот предмет, либо вы его уже покупали ранее')
        }
    }
    else{
        alert('У вас не хватвает монет:( Заработайте и возвращайтесь!')
    }
}

//                  Магический посох - 1
function buy_weapon_magic_staffI(){
    if(coins >= weapon_magic_staffI.price){
        if (weapon_magic_staffI.flag_weapon == 0){
            coins = coins -  weapon_magic_staffI.price
            current_weapon = weapon_magic_staffI
            changeHTML()
            alert('Вы приобрели: ' + current_weapon.name)
        }
        else{
            alert('У вас уже есть этот предмет, либо вы его уже покупали ранее')
        }
    }
    else{
        alert('У вас не хватвает монет:( Заработайте и возвращайтесь!')
    }
}

//                  Магический посох - 2
function buy_weapon_magic_staffII(){
    if(coins >= weapon_magic_staffII.price){
        if (weapon_magic_staffII.flag_weapon == 0){
            coins = coins -  weapon_magic_staffII.price
            current_weapon = weapon_magic_staffII
            changeHTML()
            alert('Вы приобрели: ' + current_weapon.name)
        }
        else{
            alert('У вас уже есть этот предмет, либо вы его уже покупали ранее')
        }
    }
    else{
        alert('У вас не хватвает монет:( Заработайте и возвращайтесь!')
    }
}

//                 Огенный меч
function buy_weapon_fire_sword(){
    if(coins >= weapon_fire_sword.price){
        if (weapon_fire_sword.flag_weapon == 0){
            coins = coins -  weapon_fire_sword.price
            current_weapon = weapon_fire_sword
            changeHTML()
            alert('Вы приобрели: ' + current_weapon.name)
        }
        else{
            alert('У вас уже есть этот предмет, либо вы его уже покупали ранее')
        }
    }
    else{
        alert('У вас не хватвает монет:( Заработайте и возвращайтесь!')
    }
}

//                 Божественный меч
function buy_weapon_divine_sword(){
    if(coins >= weapon_divine_sword.price){
        if (weapon_divine_sword.flag_weapon == 0){
            coins = coins -  weapon_divine_sword.price
            current_weapon = weapon_divine_sword
            changeHTML()
            alert('Вы приобрели: ' + current_weapon.name)
        }
        else{
            alert('У вас уже есть этот предмет, либо вы его уже покупали ранее')
        }
    }
    else{
        alert('У вас не хватвает монет:( Заработайте и возвращайтесь!')
    }
}

//                 Тёмный меч
function buy_weapon_dark_sword(){
    if(coins >= weapon_dark_sword.price){
        if (weapon_dark_sword.flag_weapon == 0){
            coins = coins -  weapon_dark_sword.price
            current_weapon = weapon_dark_sword
            changeHTML()
            alert('Вы приобрели: ' + current_weapon.name)
        }
        else{
            alert('У вас уже есть этот предмет, либо вы его уже покупали ранее')
        }
    }
    else{
        alert('У вас не хватвает монет:( Заработайте и возвращайтесь!')
    }
}

//                 Магичнский посах бога-I
function buy_gods_magical_staffI(){
    if(coins >= gods_magical_staffI.price){
        if (gods_magical_staffI.flag_weapon == 0){
            coins = coins -  gods_magical_staffI.price
            current_weapon = gods_magical_staffI
            changeHTML()
            alert('Вы приобрели: ' + current_weapon.name)
        }
        else{
            alert('У вас уже есть этот предмет, либо вы его уже покупали ранее')
        }
    }
    else{
        alert('У вас не хватвает монет:( Заработайте и возвращайтесь!')
    }
}
//                 Оружие мироздания
function buy_weapon_of_the_universe(){
    if(coins >= weapon_of_the_universe.price){
        if (weapon_of_the_universe.flag_weapon == 0){
            coins = coins -  weapon_of_the_universe.price
            current_weapon = weapon_of_the_universe
            changeHTML()
            alert('Вы приобрели: ' + current_weapon.name)
        }
        else{
            alert('У вас уже есть этот предмет, либо вы его уже покупали ранее')
        }
    }
    else{
        alert('У вас не хватвает монет:( Заработайте и возвращайтесь!')
    }
}
let current_weapon = weapon_bronze_sword // Переменная текущего оружия

/*                  Все переменные босса                        */
let boss_line_current = 0
let boss_line_current_string = ''
let boss_hp = 20
let boss_number = 1
let boss_hp_curent = boss_hp
let boss_hp_temp = 1.2

/*                  Функции  Босса                              */
function damage_boss(){
    //          Дамаг боссу
    boss_hp_curent = boss_hp_curent - current_weapon.damage_weapon
    //          Получение монет за удар
    coins = Math.round(coins + coins_plus * coins_temp*current_weapon.plus_coins)
    //          Процент хп босса для полоски
    boss_line_current = Math.round(boss_hp_curent/(boss_hp/100))
    boss_line_current_string = String(boss_line_current) +'%'     //Превращение для значения в стили
    if (boss_hp_curent<=0){
        
        //      Увеличение хп босса
        boss_hp = Math.round(boss_hp * boss_hp_temp)
        boss_hp_curent = boss_hp
        //      Увеличение множителя хп
        coins_plus = coins_plus + 1,9
        boss_number = boss_number + 1
        console.log('ЛВЛ босса:'+boss_number)
        // Изменение картинки босса полсе его смерти!
            while (randPic == randPic_temp){
                randPic = Math.round(Math.random()*4+1)
            }
            randPic_path = 'img/b'+String(randPic)+'.png'
            randPic_temp = randPic
            monster_img.style.backgroundImage = "url('"+randPic_path+"')"
            if (boss_number == 100){
                alert('Вы прошли игру! Поздравляю!!!')
            }
            return boss_hp_curent
    }
    else{
        return boss_hp_curent
    }
}
//                  Функция на клик по ID босса
function damage_boss_onclick(){
    boss_hp_curent = damage_boss()
    //      Конольные выводы для теста
    console.log('хп: ',boss_hp_curent)
    console.log('Монеты ',coins)
    console.log('flag: ',flag)
    console.log('%: ',boss_line_current)
    //              Ширина линии
    if (boss_hp_curent == boss_hp){
        boss_hp_line.style.width = '100%'
    }
    else if(boss_hp_curent == 0){
        boss_hp_line.style.width = '100%'
    }
    else{
        boss_hp_line.style.width = boss_line_current_string
    }
    //              Линия хп
    if (boss_line_current <= 15 && boss_line_current > 5){
        boss_hp_line.style.borderRadius = '120%'
    }
    else if(boss_hp_curent <= 5){
        boss_hp_line.style.borderRadius = '100%'
    }
    else if(boss_hp_curent == boss_hp){
        boss_hp_line.style.borderRadius = '13px'
    }
    else{
        boss_hp_line.style.borderRadius = '13px'
    }
    //              Движение босса
    if (flag == 0){
        monster_img.style.marginLeft = '10px'
        flag = 1
        monster_img.style.transform = 'rotate(3deg)'
    } 
    else if (flag == 1){
        monster_img.style.marginLeft = '-10px'
        monster_img.style.transform = 'rotate(-3deg)'
        flag = 0
    }
    // Выводы в HTML
    boss_hp_current_output.innerHTML = boss_hp_curent
    boss_hp_output.innerHTML = boss_hp
    balance_current.innerHTML = coins
    monster_lvl.innerHTML = String(boss_number)
    console.log('')
}
//                  Тригер на клик
monster.addEventListener("click", function (e){
    damage_boss_onclick()
})