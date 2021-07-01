<?php
/**
 * 日志
 *
 * @package custom
 */
?>

<?php if(!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<?php $this -> need('header.php');?>
<main>
    <article id="post-content" class="container">
        <div class="post-content-main">
            <div class="post-mains"><a href="<?php $this->options->siteUrl(); ?>">首页</a> &raquo; <?php $this->archiveTitle(array(
            'category'  =>  _t('分类 %s 下的文章'),
            'search'    =>  _t('包含关键字 %s 的文章'),
            'tag'       =>  _t('标签 %s 下的文章'),
            'date'      =>  _t('在 %s 发布的文章'),
            'author'    =>  _t('作者 %s 发布的文章')
            ), '', ''); ?></div>
            
            
           
        
        <?php $this -> need('post-comments.php');?>
            
        </div>
        <?php $this -> need('sidebar.php');?>
    </article>


</main>
    <div class="go-top">
            <a href="#add">GO</a>
    </div>

<?php $this -> need('footer.php'); ?>