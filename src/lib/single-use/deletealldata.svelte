<script>
    import Success from "$lib/components/successmodal.svelte";
    import { subscriptions} from "$lib/data/localStore.js";
    function deleteAllLocalStorage() {
        $subscriptions = []
        console.log("Deleted all subscription data");
    }
</script>

<Success />

<div class="text-center transparent-background">
    <h3 class="header-that-says-data-in-localstorage">
        All subscription data is stored in Locally
    </h3>
    <button
        class="btn btn-danger delete-info"
        data-toggle="modal"
        href="#deleteModal">Delete all subscription data</button
    >
</div>

<!-- Modal HTML -->
<div id="deleteModal" class="modal fade">
    <div class="modal-dialog modal-confirm">
        <div class="modal-content">
            <div class="modal-header flex-column">
                <div class="icon-box">
                    <i class="material-icons">&#xE5CD;</i>
                </div>
                <h4 class="modal-title w-100">Are you sure?</h4>
                <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-hidden="true">&times;</button
                >
            </div>
            <div class="modal-body">
                <p>
                    Do you really want to delete all subscription data? This
                    process cannot be undone.
                </p>
            </div>
            <div class="modal-footer justify-content-center">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal">Cancel</button
                >
                <button
                    type="button"
                    href="#confirmModal"
                    data-toggle="modal"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    on:click={deleteAllLocalStorage}>Delete</button
                >
            </div>
        </div>
    </div>
</div>

<style>
    .modal-confirm {
        color: #636363;
        width: 400px;
    }
    .modal-confirm .modal-content {
        padding: 20px;
        border-radius: 5px;
        border: none;
        text-align: center;
        font-size: 14px;
    }
    .modal-confirm .modal-header {
        border-bottom: none;
        position: relative;
    }
    .modal-confirm h4 {
        text-align: center;
        font-size: 26px;
        margin: 30px 0 -10px;
    }
    .modal-confirm .close {
        position: absolute;
        top: -5px;
        right: -2px;
    }
    .modal-confirm .modal-body {
        color: #999;
    }
    .modal-confirm .modal-footer {
        border: none;
        text-align: center;
        border-radius: 5px;
        font-size: 13px;
        padding: 10px 15px 25px;
    }
    .modal-confirm .icon-box {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 50%;
        z-index: 9;
        text-align: center;
        border: 3px solid #f15e5e;
    }
    .modal-confirm .icon-box i {
        color: #f15e5e;
        font-size: 46px;
        display: inline-block;
        margin-top: 13px;
    }
    .modal-confirm .btn,
    .modal-confirm .btn:active {
        color: #fff;
        border-radius: 4px;
        background: #60c7c1;
        text-decoration: none;
        transition: all 0.4s;
        line-height: normal;
        min-width: 120px;
        border: none;
        min-height: 40px;
        border-radius: 3px;
        margin: 0 5px;
    }
    .modal-confirm .btn-secondary {
        background: #c1c1c1;
    }
    .modal-confirm .btn-secondary:hover,
    .modal-confirm .btn-secondary:focus {
        background: #a8a8a8;
    }
    .modal-confirm .btn-danger {
        background: #f15e5e;
    }
    .modal-confirm .btn-danger:hover,
    .modal-confirm .btn-danger:focus {
        background: #ee3535;
    }

    .delete-info {
        font-size: medium;
        outline-color: red;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
        margin-top: 0.2em;
    }

    .header-that-says-data-in-localstorage {
        margin-top: 1em;
    }

    .transparent-background {
        background-color: rgba(255, 255, 255, 0);
    }
</style>
